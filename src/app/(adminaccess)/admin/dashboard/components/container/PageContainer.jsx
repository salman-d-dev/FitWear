// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
var PageContainer = function (_a) {
    var title = _a.title, description = _a.description, children = _a.children;
    return (<HelmetProvider>
    <div className='md:min-h-screen'>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      {children}
    </div>
  </HelmetProvider>);
};
export default PageContainer;
