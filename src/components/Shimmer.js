const Shimmer = () => {
  const shimmerContainer = [];
  for (let i = 0; i < 20; i++) {
    shimmerContainer.push(<div className="shimmer-cards" key={i}></div>);
  }
  return <div className="shimmerContainer">{shimmerContainer}</div>;
};
export default Shimmer;
