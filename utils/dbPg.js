import prisma from "@/utils/prisma";

const notFoundPlaceholder = "/images/no-image.svg";

function formatMotorcycle(motorcycle) {
  const firstImage = motorcycle.images?.[0];
  return {
    ...motorcycle,
    price: Number(motorcycle.price),
    imageUrl: firstImage?.url ?? notFoundPlaceholder,
  };
}

export const listMotorcyclesPg = async ({ includeImages = false } = {}) => {
  const motorcycles = await prisma.motorcycle.findMany({
    include: includeImages
      ? { images: { orderBy: { displayOrder: "asc" } } }
      : undefined,
  });
  return motorcycles.map(formatMotorcycle);
};

export const getMotorcycleByIdPg = async (motorcycleId) => {
  const motorcycle = await prisma.motorcycle.findUnique({
    where: { id: motorcycleId },
    include: { images: { orderBy: { displayOrder: "asc" } } },
  });
  if (!motorcycle) return null;
  return formatMotorcycle(motorcycle);
};

export const queryMotorcyclePg = async ({
  sortedBy = [],
  filterOpt = [],
  limitResult,
  search,
}) => {
  const where = {};
  const orderBy = [];

  if (search?.trim()) {
    const term = search.trim();
    where.OR = [
      { brand: { contains: term, mode: "insensitive" } },
      { model: { contains: term, mode: "insensitive" } },
      { name: { contains: term, mode: "insensitive" } },
      { year: { contains: term, mode: "insensitive" } },
      { color: { contains: term, mode: "insensitive" } },
    ];
  }

  for (const { fieldToSort, sortOrder } of sortedBy) {
    orderBy.push({ [fieldToSort]: sortOrder ?? "asc" });
  }

  for (const { fieldToFilter, operator, filterValue } of filterOpt) {
    switch (operator) {
      case "==":
        where[fieldToFilter] = filterValue;
        break;
      case "<=":
        where[fieldToFilter] = { lte: filterValue };
        break;
      case ">=":
        where[fieldToFilter] = { gte: filterValue };
        break;
      case "<":
        where[fieldToFilter] = { lt: filterValue };
        break;
      case ">":
        where[fieldToFilter] = { gt: filterValue };
        break;
    }
  }

  const [motorcycles, total] = await Promise.all([
    prisma.motorcycle.findMany({
      where,
      orderBy: orderBy.length ? orderBy : undefined,
      take: limitResult || undefined,
      include: { images: { orderBy: { displayOrder: "asc" }, take: 1 } },
    }),
    prisma.motorcycle.count({ where }),
  ]);

  return {
    motorcycles: motorcycles.map(formatMotorcycle),
    total,
  };
};

export const fetchUniqueBrandSetPg = async () => {
  const brands = await prisma.motorcycle.findMany({
    select: { brand: true },
    distinct: ["brand"],
    orderBy: { brand: "asc" },
  });
  return new Set(brands.map((b) => b.brand));
};

export const createMotorcyclePg = async (data) => {
  const { images, ...fields } = data;
  const motorcycle = await prisma.motorcycle.create({
    data: {
      ...fields,
      images: images?.length ? { create: images } : undefined,
    },
    include: { images: { orderBy: { displayOrder: "asc" } } },
  });
  return formatMotorcycle(motorcycle);
};

export const updateMotorcyclePg = async (id, data) => {
  const { images, ...fields } = data;
  const [, motorcycle] = await prisma.$transaction([
    prisma.motorcycleImage.deleteMany({ where: { motorcycleId: id } }),
    prisma.motorcycle.update({
      where: { id },
      data: {
        ...fields,
        images: images?.length ? { create: images } : undefined,
      },
      include: { images: { orderBy: { displayOrder: "asc" } } },
    }),
  ]);
  return formatMotorcycle(motorcycle);
};

export const deleteMotorcyclePg = async (id) => {
  return prisma.motorcycle.delete({ where: { id } });
};
