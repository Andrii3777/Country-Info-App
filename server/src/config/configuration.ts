export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  apiBasePath: process.env.API_BASE_PATH,
  countryApiBaseUrl: process.env.COUNTRY_API_BASE_URL,
  populationApiBaseUrl: process.env.POPULATION_API_BASE_URL,
  flagApiBaseUrl: process.env.FLAG_API_BASE_URL,
});
