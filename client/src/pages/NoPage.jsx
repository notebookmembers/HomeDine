function NoPage() {
  const style = {
    h1: {
      color: "#fff",
    },
    div: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      padding: 0,
      backgroundColor: "#000",
    },
  };

  return (
    <div style={style.div}>
      <h1 style={style.h1}>
        We can&apos;t find the page you&apos;re looking for
      </h1>
    </div>
  );
}

export default NoPage;
