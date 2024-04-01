import React from 'react'

export const PaginationProducts = ({ClassName, meta, handlePage}) => {

  // console.log(meta.current_page);
  const processedLinks = meta?.links?.map((link, index) => {
    if (index === 0) {
      return {
        ...link,
        label: 'Предыдущая'
      };
    } else if (index === meta.links.length - 1) {
      return {
        ...link,
        label: 'Следущая'
      };
    } else {
      return {
        ...link,
        label: link.label.replace('&laquo;', '')
      };
    }
  });

  const shouldDisplayPagination = meta?.total > 15;

  if (!shouldDisplayPagination) {
    return null;
  }

  return (

    <div className={`${ClassName} pagination`}>
        <div className="pagination__list">
          {processedLinks?.map((item, index) => (
            <button key={index} 
              className={item.active ? 'is-current' : ''} 
              onClick={_=> handlePage(item.url)}>{item.label}
            </button>
          ))}
        </div>
    </div>
  )
}
