function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
