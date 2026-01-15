import React, { useEffect, useMemo, useState } from "react";

function Home() {
  const [inquiry, setInquiry] = useState([
    {
      id: 1,
      name: "Thomas Miller",
      email: "thomas.miller@gmail.com",
      phone: "0812345678",
      subject: "Request for project timeline",
      message:
        "Hi EverZone team - could you share the expected timeline and key milestones for the Riverside renovation project?",
      receivedAt: "2026-01-01T16:30:00.000Z",
      read: false,
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@gmail.com",
      phone: "0893456781",
      subject: "Service pricing inquiry",
      message:
        "Hello, I'm interested in your property management services. Can you send a breakdown of pricing and what's included?",
      receivedAt: "2026-01-02T09:12:00.000Z",
      read: true,
    },
    {
      id: 3,
      name: "Daniel Harris",
      email: "daniel.harris@gmail.com",
      phone: "0629876543",
      subject: "Availability for a site visit",
      message:
        "Can we schedule a site visit next week? Tuesday or Thursday afternoon would work best for me.",
      receivedAt: "2026-01-02T14:45:00.000Z",
      read: false,
    },
    {
      id: 4,
      name: "Emily Carter",
      email: "emily.carter@gmail.com",
      phone: "0912345670",
      subject: "Partnership opportunity",
      message:
        "We're a solar supplier and would love to explore a partnership for your upcoming developments. Who should I contact?",
      receivedAt: "2026-01-03T08:05:00.000Z",
      read: true,
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@gmail.com",
      phone: "0817788990",
      subject: "Quotation request (maintenance)",
      message:
        "Could you provide a quotation for monthly maintenance for a 12-unit apartment building in Colombo 05?",
      receivedAt: "2026-01-04T11:22:00.000Z",
      read: false,
    },
    {
      id: 6,
      name: "Jessica Taylor",
      email: "jessica.taylor@gmail.com",
      phone: "0861122334",
      subject: "Update on my inquiry",
      message:
        "Hi, following up on my previous message. Any update on the feasibility study for the land plot I shared?",
      receivedAt: "2026-01-05T16:30:00.000Z",
      read: false,
    },
    {
      id: 7,
      name: "Noah Williams",
      email: "noah.williams@gmail.com",
      phone: "0925566778",
      subject: "Invoice / payment confirmation",
      message:
        "Hello, can you confirm you received the payment for invoice EZ-1042? I can send the transfer receipt if needed.",
      receivedAt: "2026-01-06T10:18:00.000Z",
      read: true,
    },
    {
      id: 8,
      name: "Sophia Davis",
      email: "sophia.davis@gmail.com",
      phone: "0801234567",
      subject: "Request for brochure",
      message:
        "Could you share your latest company brochure and a short portfolio of completed projects?",
      receivedAt: "2026-01-06T18:41:00.000Z",
      read: false,
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james.anderson@gmail.com",
      phone: "0834567891",
      subject: "Construction permit guidance",
      message:
        "I'm new to the process - do you help with local permits and approvals? If yes, what documents do you need?",
      receivedAt: "2026-01-07T07:55:00.000Z",
      read: false,
    },
    {
      id: 10,
      name: "Olivia Martin",
      email: "olivia.martin@gmail.com",
      phone: "0940011223",
      subject: "Interior design consultation",
      message:
        "Do you offer interior design consultation for small office spaces? Looking for a modern, minimal setup.",
      receivedAt: "2026-01-07T12:10:00.000Z",
      read: true,
    },
    {
      id: 11,
      name: "Jacob Brown",
      email: "jacob.brown@gmail.com",
      phone: "0819900112",
      subject: "Project handover documents",
      message:
        "Can you send the final handover documents and warranty details for the Maple Street project?",
      receivedAt: "2026-01-08T09:30:00.000Z",
      read: true,
    },
    {
      id: 12,
      name: "Ethan Clark",
      email: "ethan.clark@gmail.com",
      phone: "0876655443",
      subject: "Request a callback",
      message:
        "Please call me when available. I'd like to discuss a small renovation and estimated cost range.",
      receivedAt: "2026-01-08T17:05:00.000Z",
      read: false,
    },
    {
      id: 13,
      name: "Grace Lee",
      email: "grace.lee@gmail.com",
      phone: "0823344556",
      subject: "Clarification on service scope",
      message:
        "For your supervision service, does it include weekly site reporting and contractor coordination?",
      receivedAt: "2026-01-09T11:47:00.000Z",
      read: false,
    },
    {
      id: 14,
      name: "Hannah Smith",
      email: "hannah.smith@gmail.com",
      phone: "0917788991",
      subject: "Meeting reschedule",
      message:
        "Hi, can we move tomorrow's meeting to Friday morning? Any time between 9-11 works.",
      receivedAt: "2026-01-10T13:22:00.000Z",
      read: true,
    },
    {
      id: 15,
      name: "William Thompson",
      email: "william.thompson@gmail.com",
      phone: "0809988776",
      subject: "Request for proposal",
      message:
        "We're inviting bids for a mixed-use development. Can you share an RFP template and your submission requirements?",
      receivedAt: "2026-01-11T08:14:00.000Z",
      read: false,
    },
    {
      id: 16,
      name: "Benjamin Walker",
      email: "benjamin.walker@gmail.com",
      phone: "0931234567",
      subject: "Complaint: delayed response",
      message:
        "I sent an inquiry last week and haven't heard back. Could someone please contact me today?",
      receivedAt: "2026-01-12T15:58:00.000Z",
      read: false,
    },
    {
      id: 17,
      name: "Chloe Adams",
      email: "chloe.adams@gmail.com",
      phone: "0855566778",
      subject: "Request for maintenance contract",
      message:
        "We need an annual maintenance contract for HVAC and electrical. Do you cover commercial buildings?",
      receivedAt: "2026-01-13T10:06:00.000Z",
      read: true,
    },
    {
      id: 18,
      name: "Ryan Scott",
      email: "ryan.scott@gmail.com",
      phone: "0881122334",
      subject: "Question about project warranty",
      message:
        "What’s the standard warranty period for workmanship and materials on completed projects?",
      receivedAt: "2026-01-14T19:40:00.000Z",
      read: false,
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 7;
  const [activeInquiryId, setActiveInquiryId] = useState(null);

  const filteredInquiries = useMemo(() => {
    return inquiry.filter((item) => {
      if (filter === "Read") return item.read;
      if (filter === "Unread") return !item.read;
      return true;
    });
  }, [filter, inquiry]);

  const totalPages = Math.max(1, Math.ceil(filteredInquiries.length / pageSize));

  const currentPage = Math.min(page, totalPages);
  const pagedInquiries = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredInquiries.slice(start, start + pageSize);
  }, [currentPage, filteredInquiries]);

  const formatReceivedAt = (value) => {
    const date = new Date(value);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${dd}.${mm}.${yyyy} - ${hh}:${min}`;
  };

  const formatDetailDateParts = (value) => {
    const date = new Date(value);
    const day = date.getDate();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()] ?? "";
    const year = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return {
      dateLine: `${day} ${month} ${year}`,
      timeLine: `${hh}:${min}`,
    };
  };

  const setFilterAndResetPage = (value) => {
    setFilter(value);
    setPage(1);
  };

  const toggleRead = (id) => {
    setInquiry((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: !item.read } : item))
    );
  };

  const openInquiry = (id) => {
    setActiveInquiryId(id);
    setInquiry((prev) => prev.map((it) => (it.id === id ? { ...it, read: true } : it)));
  };

  const closeInquiry = () => {
    setActiveInquiryId(null);
  };

  const activeInquiry = useMemo(() => {
    if (activeInquiryId == null) return null;
    return inquiry.find((it) => it.id === activeInquiryId) ?? null;
  }, [activeInquiryId, inquiry]);

  useEffect(() => {
    if (!activeInquiry) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeInquiry();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeInquiry]);

  const getPaginationItems = () => {
    // Matches the visual style in the screenshot: show first/last, ellipsis, and neighbors.
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const items = [1];
    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    if (left > 2) items.push("…");
    for (let p = left; p <= right; p += 1) items.push(p);
    if (right < totalPages - 1) items.push("…");

    items.push(totalPages);
    return items;
  };


  return (
    <div className="w-full max-w-6xl p-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Overview
      </h1>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex h-[72px] w-[170px] items-center justify-center border border-black bg-white shadow-sm">
          <span className="text-sm font-extrabold text-slate-900">Services - 14</span>
        </div>

        <div className="flex h-[72px] w-[170px] items-center justify-center border border-black bg-white shadow-sm">
          <span className="text-sm font-extrabold text-slate-900">Projects - 12</span>
        </div>
      </div>

      <section className="mt-10 border border-black/40 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Inquiries
          </h2>

          <div className="flex items-center gap-3" role="group" aria-label="Filter inquiries">
            {["All", "Read", "Unread"].map((value) => {
              const isActive = filter === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilterAndResetPage(value)}
                  aria-pressed={isActive}
                  className={[
                    "h-10 min-w-[84px] border border-black px-6 text-sm font-semibold transition",
                    isActive ? "bg-black text-white" : "bg-slate-300 text-slate-900",
                    "focus:outline-none focus:ring-2 focus:ring-black/30",
                  ].join(" ")}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-black/40">
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-300 text-xs font-bold text-slate-900">
                  <th className="border-b border-black/40 px-4 py-3">Name</th>
                  <th className="border-b border-black/40 px-4 py-3">Email</th>
                  <th className="border-b border-black/40 px-4 py-3">Phone</th>
                  <th className="border-b border-black/40 px-4 py-3">Subject</th>
                  <th className="border-b border-black/40 px-4 py-3">Date received</th>
                  <th className="border-b border-black/40 px-3 py-3" />
                </tr>
              </thead>

              <tbody>
                {pagedInquiries.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-10 text-sm font-medium text-slate-500"
                    >
                      No inquiries found.
                    </td>
                  </tr>
                ) : (
                  pagedInquiries.map((item) => (
                    <tr
                      key={item.id}
                      className={[
                        "cursor-pointer border-b border-black/40 bg-white",
                        "hover:bg-slate-50",
                      ].join(" ")}
                      onClick={() => openInquiry(item.id)}
                      title="Click to view details"
                    >
                      <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-slate-900">
                        {item.email}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-slate-900">
                        {item.phone}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-slate-900">
                        {item.subject}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-slate-900">
                        {formatReceivedAt(item.receivedAt)}
                      </td>
                      <td className="px-3 py-4">
                        <div className="flex items-center justify-end gap-3">
                          {!item.read ? (
                            <span
                              className="h-2.5 w-2.5 rounded-full bg-orange-500"
                              aria-label="Unread"
                              title="Unread"
                            />
                          ) : (
                            <span className="h-2.5 w-2.5" aria-hidden="true" />
                          )}
                          <button
                            type="button"
                            className="text-xl font-bold text-slate-700"
                            aria-label="Open inquiry"
                            onClick={(e) => {
                              e.stopPropagation();
                              openInquiry(item.id);
                            }}
                          >
                            ›
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center gap-0 px-4 py-4">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className={[
                "h-10 w-10 border border-black text-lg font-semibold",
                currentPage <= 1 ? "bg-slate-100 text-slate-400" : "bg-white",
              ].join(" ")}
              aria-label="Previous page"
            >
              ‹
            </button>

            {getPaginationItems().map((it, i) => {
              if (it === "…") {
                return (
                  <div
                    key={`ellipsis-${i}`}
                    className="flex h-10 w-10 items-center justify-center border-y border-black bg-white text-lg"
                    aria-hidden="true"
                  >
                    …
                  </div>
                );
              }

              const isActive = it === currentPage;
              return (
                <button
                  key={it}
                  type="button"
                  onClick={() => setPage(it)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "h-10 w-10 border border-black text-sm font-semibold",
                    isActive ? "bg-slate-200" : "bg-white",
                  ].join(" ")}
                >
                  {it}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className={[
                "h-10 w-10 border border-black text-lg font-semibold",
                currentPage >= totalPages ? "bg-slate-100 text-slate-400" : "bg-white",
              ].join(" ")}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {activeInquiry ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close inquiry detail"
            onClick={closeInquiry}
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-[520px] bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 px-10 py-8">
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Inquiry Detail
                </h3>

                <div className="mt-8">
                  <div className="text-base font-bold text-slate-700">
                    {activeInquiry.subject}
                  </div>
                  {(() => {
                    const parts = formatDetailDateParts(activeInquiry.receivedAt);
                    return (
                      <div className="mt-3 text-base font-semibold leading-tight text-slate-600">
                        <div>{parts.dateLine}</div>
                        <div>{parts.timeLine}</div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <button
                type="button"
                onClick={closeInquiry}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-black text-xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="px-10 pb-10">
              <h4 className="text-2xl font-extrabold text-slate-900">
                Inquired Person
              </h4>

              <div className="mt-6 grid grid-cols-2 gap-y-5">
                <div className="text-base font-semibold text-slate-600">Name</div>
                <div className="text-base font-semibold text-slate-700">{activeInquiry.name}</div>

                <div className="text-base font-semibold text-slate-600">Email</div>
                <div className="text-base font-semibold text-slate-700">{activeInquiry.email}</div>

                <div className="text-base font-semibold text-slate-600">Phone Number</div>
                <div className="text-base font-semibold text-slate-700">{activeInquiry.phone}</div>
              </div>

              <h4 className="mt-10 text-2xl font-extrabold text-slate-900">Message</h4>
              <p className="mt-4 text-base font-semibold text-slate-600">
                {activeInquiry.message}
              </p>

              <button
                type="button"
                className="mt-8 border border-black bg-white px-4 py-2 text-sm font-semibold"
                onClick={() => toggleRead(activeInquiry.id)}
              >
                Mark as {activeInquiry.read ? "Unread" : "Read"}
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

export default Home;