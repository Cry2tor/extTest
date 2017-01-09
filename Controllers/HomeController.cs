using System.Web.Mvc;

namespace extTest.Controllers
{
    public class HomeController:Controller
    {
        public ActionResult Index()
        {
             string status = "Release";
 
            #if DEBUG
                status = "Debug";
            #endif
 
            ViewData["ConfigurationStatus"] = status;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}