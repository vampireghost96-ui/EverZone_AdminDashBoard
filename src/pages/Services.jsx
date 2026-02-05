import { useMemo, useRef, useState } from "react";

const servicesMock = [
  {
    id: "road-bridge",
    title: "Road and Bridge Construction",
    description:
      "Road and bridge construction involves designing and building safe, durable transportation infrastructure that supports efficient travel and ensures longevity.",
  },
  {
    id: "earth-works",
    title: "Earth Works",
    description:
      "Site preparation, excavation, and grading services to create a stable foundation for infrastructure and construction projects.",
  },
  {
    id: "building-construction",
    title: "Building Construction",
    description:
      "Residential, commercial, and industrial construction delivered with quality materials, precise planning, and safety compliance.",
  },
  {
    id: "steel-structure",
    title: "Steel Structure Works",
    description:
      "Fabrication and installation of structural steel frameworks for long-lasting, high-performance builds.",
  },
  {
    id: "interior-finish",
    title: "Interior Fit-Out",
    description:
      "Premium interior finishes, space planning, and bespoke solutions tailored to business and residential needs.",
  },
]

const PhotoIcon = ({ className = "h-5 w-5" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m8 14 2-2 4 4" />
    <path d="m14 12 3-3 4 4" />
    <circle cx="9" cy="9" r="1.5" />
  </svg>
);

function Services() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const SERVICE_IMAGE_URL = "/services_placeholder.jpg";

  const fileSummary = useMemo(() => {
    if (files.length === 0) return "";
    if (files.length === 1) return files[0]?.name ?? "";
    return `${files.length} files selected`;
  }, [files]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const addFiles = (fileList) => {
    const next = Array.from(fileList ?? []).filter((f) => f && f.type?.startsWith("image/"));
    if (next.length === 0) return;
    setFiles(next);
  };

  const onDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer?.files);
  };

  const onBrowse = (e) => {
    addFiles(e.target.files);
  };

  return (
    <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] min-h-screen bg-[#2c6480] py-8">
      <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-6">
        <div className="w-full overflow-hidden rounded-[44px] bg-white shadow-sm">
          <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
        <h1 className="text-3xl font-semibold text-slate-800 sm:text-4xl">Service Management</h1>

        <h2 className="mt-10 text-xl font-semibold text-slate-600">Upload New Service</h2>

        <section className="mt-4 rounded-2xl bg-slate-50 p-6">
          

          <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_2fr]">
            <div className="flex h-60 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-white">
              <div className="flex flex-col items-center gap-2 text-center text-xs text-slate-400">
                <span className="grid h-10 w-10 mb-5 mr-10 place-items-center text-slate-400">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-15 w-15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="m8 14 2-2 4 4" />
                    <path d="m14 12 3-3 4 4" />
                    <circle cx="9" cy="9" r="1.5" />
                  </svg>
                </span>
    
                <div className="mt-6 text-center text-sm text-slate-500">
                          Drag and drop to change your image here or{" "}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openEditFilePicker();
                            }}
                            className="text-[#7ac943]"
                          >
                            browse
                          </button>
                        </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600">Service Title</label>
                <input
                  type="text"
                  placeholder="Enter title of the service"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Service Description
                </label>
                <input
                  type="text"
                  placeholder="Enter your service Description"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-slate-300 focus:outline-none"
                />
              </div>

              <div className="flex justify-end">
                <button type="button" className="w-full rounded-full bg-[#1f4f64] p-[2px] shadow-sm">
                  <span className="flex w-full items-stretch overflow-hidden rounded-full bg-[#2c6480]">
                    <span className="flex-1 py-4 text-center text-base font-semibold text-white">
                      Upload Services
                    </span>
                    <span className="grid w-16 place-items-center bg-[#7ac943] text-2xl font-semibold text-[#2c6480]">
                      › 
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

            <div className="mt-10 flex items-baseline gap-3 text-slate-700">
              <span className="text-4xl font-semibold tracking-tight">{servicesMock.length}</span>
              <span className="text-xl">Services</span>
            </div>

            <section className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {servicesMock.map((svc) => (
                <article
                  key={svc.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="bg-slate-100">
                    <img
                      src={SERVICE_IMAGE_URL}
                      alt={svc.title}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  <div className="flex h-full flex-col px-6 py-6">
                    <h3 className="text-xl font-semibold text-slate-800">{svc.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {svc.description}
                    </p>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        className="rounded-full bg-[#2c6480] px-12 py-4 text-sm font-semibold text-white"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;