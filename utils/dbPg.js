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

  if (images !== undefined) {
    const [, motorcycle] = await prisma.$transaction([
      prisma.motorcycleImage.deleteMany({ where: { motorcycleId: id } }),
      prisma.motorcycle.update({
        where: { id },
        data: {
          ...fields,
          images: images.length ? { create: images } : undefined,
        },
        include: { images: { orderBy: { displayOrder: "asc" } } },
      }),
    ]);
    return formatMotorcycle(motorcycle);
  }

  const motorcycle = await prisma.motorcycle.update({
    where: { id },
    data: fields,
    include: { images: { orderBy: { displayOrder: "asc" } } },
  });
  return formatMotorcycle(motorcycle);
};

export const deleteMotorcyclePg = async (id) => {
  return prisma.motorcycle.delete({ where: { id } });
};

/* -------------------------------------------------------------------------- */
/*                                 Promotions                                 */
/* -------------------------------------------------------------------------- */

function formatPromotion(promotion) {
  return {
    ...promotion,
    motorcycle: promotion.motorcycle
      ? formatMotorcycle(promotion.motorcycle)
      : null,
  };
}

const promotionInclude = {
  motorcycle: {
    include: { images: { orderBy: { displayOrder: "asc" }, take: 1 } },
  },
};

// Live = manually active AND within the start/end window.
export const listLivePromotionsPg = async () => {
  const now = new Date();
  const promotions = await prisma.promotion.findMany({
    where: {
      isActive: true,
      startDate: { lte: now },
      endDate: { gte: now },
    },
    orderBy: [
      { isFeatured: "desc" },
      { displayOrder: "asc" },
      { endDate: "asc" },
    ],
    include: promotionInclude,
  });
  return promotions.map(formatPromotion);
};

// Recently expired promos kept for the public "Past deals" SEO section.
export const listPastPromotionsPg = async ({ limit = 6 } = {}) => {
  const now = new Date();
  const promotions = await prisma.promotion.findMany({
    where: { endDate: { lt: now } },
    orderBy: { endDate: "desc" },
    take: limit,
    include: promotionInclude,
  });
  return promotions.map(formatPromotion);
};

// Admin view: every promotion, newest first.
export const listAllPromotionsPg = async () => {
  const promotions = await prisma.promotion.findMany({
    orderBy: { createdAt: "desc" },
    include: promotionInclude,
  });
  return promotions.map(formatPromotion);
};

export const getPromotionByIdPg = async (id) => {
  const promotion = await prisma.promotion.findUnique({
    where: { id },
    include: promotionInclude,
  });
  if (!promotion) return null;
  return formatPromotion(promotion);
};

export const createPromotionPg = async (data) => {
  const promotion = await prisma.promotion.create({
    data,
    include: promotionInclude,
  });
  return formatPromotion(promotion);
};

export const updatePromotionPg = async (id, data) => {
  const promotion = await prisma.promotion.update({
    where: { id },
    data,
    include: promotionInclude,
  });
  return formatPromotion(promotion);
};

export const deletePromotionPg = async (id) => {
  return prisma.promotion.delete({ where: { id } });
};
