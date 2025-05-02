namespace EmployeeAPI.DTOs
{

    // this class is used to filter the employees based on the provided parameters
    public class FilterParams
    {
        public string Search { get; set; } = string.Empty; 
        //public string Position { get; set; } = string.Empty;
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public string SortBy { get; set; } = string.Empty;
        public bool SortDescending { get; set; }
    }
}
