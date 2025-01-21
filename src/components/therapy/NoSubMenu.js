export default function NoSubMenu() {
  return (
    <div className="flex flex-col justify-center max-w-3xl min-h-72">
      <p className="section-title !mb-6 ">Oops! No Therapies Found</p>
      <p className="section-content">
        Currently, there are no therapies available to display. Please check
        back soon as we continue to update our offerings. If you have specific
        therapy needs or questions, feel free to contact us—we’re here to assist
        you on your wellness journey.
      </p>
      <button onClick={() => window.current.reload()} type="button" className="site-button-primary">
        Reload
      </button>
    </div>
  );
}
