function Button() {
  const handleClick = () => {
    console.log("clicked");
    console.log("clicked");
  };
  return <button onClick={handleClick}>+</button>;
}

export default Button;
