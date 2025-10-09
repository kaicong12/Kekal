"use client";
import { useAuth } from "../../auth/AuthProvider";

export default function ReceiptHeader() {
  const { user } = useAuth();
  console.log({ user });

  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_content">
              <h2 className="breadcrumb_title">
                Cash Sales - Invoice Generator
              </h2>
              <strong className="subtitle">Welcome, {user?.displayName}</strong>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="#">Cash Sales</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
