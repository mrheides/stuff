using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SuperComplexEnterpriseApp.Startup))]
namespace SuperComplexEnterpriseApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
