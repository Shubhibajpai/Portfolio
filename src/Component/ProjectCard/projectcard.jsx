import React, { useId, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown, faChevronUp, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ image, imgalt, title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const borderGlowFilterId = `pcb-glow-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const toggleExpanded = () => setExpanded((v) => !v);

  const onCardKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <div className="relative mt-8 w-full max-w-[350px] overflow-visible">
      <div className="group relative origin-center transition-transform duration-300 will-change-transform hover:scale-105 hover:z-20">
        {expanded && (
          <svg
            className="pointer-events-none absolute inset-0 z-10 size-full overflow-visible text-purple-500 dark:text-purple-400"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <filter
                id={borderGlowFilterId}
                x="-45%"
                y="-45%"
                width="190%"
                height="190%"
                colorInterpolationFilters="sRGB"
              >
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="1.35"
                  floodColor="#a855f7"
                  floodOpacity="0.55"
                  result="glow1"
                />
                <feDropShadow
                  in="SourceGraphic"
                  dx="0"
                  dy="1"
                  stdDeviation="3.2"
                  floodColor="#a855f7"
                  floodOpacity="0.28"
                  result="glow2"
                />
                <feMerge>
                  <feMergeNode in="glow2" />
                  <feMergeNode in="glow1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g transform="translate(50 50) scale(1.018) translate(-50 -50)">
              <g transform="rotate(180 50 50)">
                <rect
                  className="project-card-border-rect"
                  filter={`url(#${borderGlowFilterId})`}
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  rx="3.43"
                  ry="3.43"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.22"
                  vectorEffect="nonScalingStroke"
                  pathLength={100}
                />
              </g>
            </g>
          </svg>
        )}
        <article
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-label={`${title}. ${expanded ? "Collapse" : "Expand"} project details.`}
          onClick={toggleExpanded}
          onKeyDown={onCardKeyDown}
          className={`relative z-1 flex min-h-0 w-full flex-col overflow-hidden rounded-xl border bg-black text-white shadow-md transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10 dark:bg-zinc-900 dark:text-white dark:group-hover:shadow-purple-900/30 cursor-pointer ${
            expanded
              ? "border-transparent dark:border-transparent"
              : "border-gray-200 dark:border-zinc-800"
          }`}
        >
      {/* <FontAwesomeIcon
        icon={faUpRightFromSquare}
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 text-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      /> */}
      <img
        src={image}
        alt={imgalt}
        className="h-44 w-full shrink-0 object-cover rounded-t-xl transition-transform duration-300 hover:scale-[1.05]"
      />

      <div className="flex flex-1 flex-col px-3 pb-4 pt-1">
        <h2
          className={`text-center text-lg font-bold my-4 ${
            expanded ? "" : "line-clamp-2"
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-1 flex-1 text-sm leading-relaxed text-white my-6 dark:text-neutral-200 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        <span
          className="mt-3 self-start text-sm text-purple-600 dark:text-purple-400"
          aria-hidden
        >
          {expanded ? (
            <>
              <FontAwesomeIcon icon={faChevronUp} className="mr-1" /> See Less
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faChevronDown} className="mr-1" />
              See more
            </>
          )}
        </span>
      </div>
    </article>
      </div>
    </div>
  );
};

export default ProjectCard;