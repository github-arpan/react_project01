const Shimmer = () => {
  const shimmerContainer = [];
  for (let i = 0; i < 20; i++) {
    shimmerContainer.push(
      <div className="h-60 w-72 bg-gray-200 m-2 p-2 rounded-md" key={i}></div>
    );
  }
  return (
    <div className="flex flex-wrap lg:mx-28 my-16 justify-center  ">
      {shimmerContainer}
    </div>
  );
};
export default Shimmer;
