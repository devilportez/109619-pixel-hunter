const createDOM = (string) => {
  const container = document.createElement(`div`);

  container.innerHTML = string;

  return container;
};

export default createDOM;
