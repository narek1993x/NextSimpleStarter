import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import MobileDetect from "mobile-detect";
import _get from "lodash/get";
import { initStore } from "store/store";
import { setDeviceInfo } from "store/global/actions";
import "static/styles/index.scss";

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    const userAgent = _get(ctx.req, 'headers["user-agent"]', null);

    if (userAgent) {
      // Define device information
      const md = new MobileDetect(userAgent);
      const deviceInfo = {
        mobile: !!md.mobile(),
        tablet: !!md.tablet(),
        os: md.os(),
        userAgent: md.userAgent(),
      };

      ctx.store.dispatch(setDeviceInfo(deviceInfo));
    }

    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default withRedux(initStore)(MyApp);
