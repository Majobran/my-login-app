import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`تم تسجيل الدخول بالبريد: ${email}`);
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">كلمة المرور</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
