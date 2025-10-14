import "../globals.css";

export const metadata = {
  title: "MUN",
  description: "by IIST",
  icons: {
    icon: "icon.png", // /public path
  },
};

export default function editt({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}

