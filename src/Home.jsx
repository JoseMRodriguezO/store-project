import React from "react";

export function Home() {
  return (
    <div className="container">
      <div>hi</div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
