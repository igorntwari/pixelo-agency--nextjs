import "./globals.css";
import { dmSans } from "./assets";
import Footer from "@/components/footer";
import classNames from "classnames";

export interface Project {
  id: number;
  images: string[];
  title: string;
  intro?: string;
  description: string;
  arrange?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    images: [
      "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmQlMjBpZGVudGl0eXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1590102425712-1c28a0d6b85b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhbmQlMjBpZGVudGl0eXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYW5kJTIwaWRlbnRpdHl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590102426275-8d1c367070d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kJTIwaWRlbnRpdHl8ZW58MHx8MHx8fDA%3D",
    ],
    title: "Revamping Brand Identity",
    intro: "ProTech Innovations, a leading player in the tech industry",
    description:
      "ProTech Innovations, a leading player in the tech industry, sought to revamp their brand identity to reflect their growth and evolution. We worked closely with them to create a fresh and modern brand identity that truly represents their innovative spirit and forward-thinking approach. The new brand identity has not only resonated with their target audience but also set them apart from their competitors. It has helped them communicate their values and vision more effectively, leading to increased brand recognition and customer loyalty.",
  },
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudHklMjBzdHJhdGVneXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudHklMjBzdHJhdGVneXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGVudHklMjBzdHJhdGVneXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVudHklMjBzdHJhdGVneXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    title: "Content Strategy for Green Energy Solutions",
    intro: "Green Energy Solutions, a company dedicated to sustainable energy",
    description:
      "Green Energy Solutions, a company dedicated to sustainable energy, needed a content strategy that could educate their audience about the benefits of green energy. We developed a comprehensive content strategy that leveraged various formats - blogs, whitepapers, infographics, and videos. This strategy has significantly increased their online engagement and positioned them as thought leaders in the green energy sector. It has also helped them spread awareness about sustainable energy and its impact on the environment, contributing to their mission of promoting green energy solutions.",
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
    ],
    title: "Website Design for Bookworm Online Library",
    intro:
      "Bookworm Online Library, an online platform that offers a wide range of books",
    description:
      "Bookworm Online Library, an online platform that offers a wide range of books, wanted a website that was user-friendly and engaging. We designed a website with intuitive navigation and a clean layout, making it easy for users to find and explore their vast collection of books. The new website has received positive feedback from users and has seen an increase in membership sign-ups. It has also improved the overall user experience, making it easier for book lovers to discover and enjoy their favorite books online.",
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    ],
    title: "Graphic Design Campaign for Fashion Forward Apparel",
    intro: "Fashion Forward Apparel, a trendy clothing brand",
    description:
      "Fashion Forward Apparel, a trendy clothing brand, wanted a graphic design campaign that could showcase their latest collection. We created a series of visually stunning graphics that captured the essence of their brand and the uniqueness of their collection. The campaign was a hit on social media, driving increased traffic to their website and boosting sales. It has also helped them create a strong visual identity, making their brand more memorable and appealing to their target audience.",
  },
  {
    id: 4,
    title: "IT Consulting for Quantum Computing Corp",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SVQlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SVQlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SVQlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fElUJTIwY29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    intro: "Quantum Computing Corp, a pioneer in quantum computing",
    description:
      "Quantum Computing Corp, a pioneer in quantum computing, needed IT consulting services to enhance their IT infrastructure. We provided them with expert advice and solutions that have improved their operational efficiency and data security. Our IT consulting services have helped them stay ahead of the curve in the rapidly evolving tech industry. It has also enabled them to leverage the latest technologies and best practices, ensuring that their IT infrastructure is robust, secure, and capable of supporting their innovative work in quantum computing.",
  },
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    intro: "Fresh Farm Organics, a provider of organic produce",
    title: "Digital Marketing Plan for Fresh Farm Organics",
    description:
      "Fresh Farm Organics, a provider of organic produce, wanted a digital marketing plan to expand their online presence. We crafted a digital marketing plan that utilized SEO, social media marketing, and email marketing to reach their target audience. The plan has resulted in increased online visibility and sales for Fresh Farm Organics. It has also helped them connect with health-conscious consumers who value organic produce, contributing to their mission of promoting healthy and sustainable eating habits.",
  },
  {
    id: 6,
    images: [
      "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    ],
    title: "Web Development for Virtual Realty Estate",
    intro:
      "Virtual Realty Estate, a real estate company specializing in virtual tours",
    description:
      "Virtual Realty Estate, a real estate company specializing in virtual tours, needed a website that could showcase their unique selling proposition. We developed a website with integrated virtual tour functionality, providing a seamless user experience. The website has helped Virtual Realty Estate stand out in the competitive real estate market. It has also made it easier for potential buyers to explore properties virtually, enhancing their property buying experience.",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          dmSans.className,
          "w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-light-green scrollbar-track-neutral-950",
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
