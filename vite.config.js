import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/turf_booking/", // 👈 set the correct sub-path
  plugins: [react(), tailwindcss()],
});
