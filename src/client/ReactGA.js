import ReactGA from 'react-ga';

export const collectVisitorToGA = (gaKey, URL) => {
  if (!gaKey) return;
  ReactGA.initialize(gaKey);
  ReactGA.pageview(URL);
  console.log(`THIS IS WORKING ${gaKey} : ${URL}`);
};
