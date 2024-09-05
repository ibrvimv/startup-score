import { Inter, Montserrat } from 'next/font/google'
 
export const inter = Inter({ 
	subsets: ["latin", "latin-ext"], 
	weight: ["100", "200", "300", "400", "500", "600", "700"], 
	preload: true, 
	variable:'--font-inter' });

 
export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
	weight: ["400", "500", "600", "700"], 
	preload: true,
	variable: '--font-montserrat'
})