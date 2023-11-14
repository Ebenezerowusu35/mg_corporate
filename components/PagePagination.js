import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
const PagePagination = ({ totalPage, setCurrentPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  let currentPage  = useSelector((state) => state.news.currentPage);
  console.log("total", totalPage, currentPage)
  return (
    <>
      <div className="mt-2">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={".."}
          pageCount={parseInt(totalPage)}
          initialPage={currentPage - 1}
          marginPagesDisplayed={2}
          onPageChange={(e) => {
            router.push(`${pathname}?page=${parseInt(e.selected) + 1}`);
            if (typeof window !== "undefined") {
              window.scroll({ top: 0, behavior: "auto" });
            }
          }}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};
export default PagePagination;
