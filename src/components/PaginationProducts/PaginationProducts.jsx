import React from "react";

export const PaginationProducts = ({ ClassName, meta, handlePage }) => {
  const processedLinks = meta?.links?.map((link, index) => {
    if (index === 0) {
      return {
        ...link,
        label: "Предыдущая",
      };
    } else if (index === meta.links.length - 1) {
      return {
        ...link,
        label: "Следущая",
      };
    } else {
      return {
        ...link,
        label: link.label.replace("&laquo;", ""),
      };
    }
  });

  const shouldDisplayPagination = meta?.total > 15;

  if (!shouldDisplayPagination) {
    return null;
  }

  console.log(processedLinks);

  return (
    <div className={`${ClassName} pagination`}>
      <div className="pagination__list">
        {processedLinks?.map((item, index) => (
          <React.Fragment key={index}>
            <button
              disabled={!item?.url}
              className={item.active ? "is-current" : ""}
              onClick={(_) => handlePage(item.url + "&active=1")}
            >
              {item.label}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
