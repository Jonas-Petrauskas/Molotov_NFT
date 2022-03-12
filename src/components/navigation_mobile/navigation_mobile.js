function NavigationMobile({ dataObject }) {
  return (
    <div className="Navigation mobile-only">
      <div className="NavigationCell">
        <a href={dataObject.navigation_1_link}>{dataObject.navigation_1}</a>
      </div>
      <div className="NavigationCell">
        <a href={dataObject.navigation_2_link}>{dataObject.navigation_2}</a>
      </div>
      <div className="NavigationCell">
        <a href={dataObject.navigation_3_link}>{dataObject.navigation_3}</a>
      </div>
      <div className="NavigationCell">
        <a href={dataObject.navigation_4_link}>{dataObject.navigation_4}</a>
      </div>
    </div>
  );
}
export default NavigationMobile;
