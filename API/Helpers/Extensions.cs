// namespace API.Helpers
// {
//     public static class Extensions
//     {
//         public static void AddApplicationError(this HttpResponse response, string message)
//         {
//             response.Headers.Add("Application-Error", message);
//             response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
//             response.Headers.Add("Access-Control-Allow-Origin", "*");
//         }
//         public static void AddPagination(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages)
//         {
//             var paginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalItems, totalPages);
//             var camalCaseFormatter = new JsonSerializerSettings();
//             camalCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
//             response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeader, camalCaseFormatter));
//             response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
//         }
//     }
// }