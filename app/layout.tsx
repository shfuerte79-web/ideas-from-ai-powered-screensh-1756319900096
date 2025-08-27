import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Screenshot Assistant",
    "one_liner": "Transform screenshots into editable documents seamlessly.",
    "why_now": "With remote work dynamics growing, tools that boost efficiency are in high demand.",
    "novel_mechanism": "Utilizes a combination of image recognition and contextual NLP for text interpretation.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Creating meeting notes from photo captures",
      "Generating instant task lists from screenshots of project management boards"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "basic OCR",
        "text formatting",
        "export options"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Zapier"
      ],
      "data_bootstrap": [
        "public screenshot dataset",
        "user-generated screenshots"
      ],
      "risk": [
        "moderate accuracy in diverse image quality",
        "limited initial user engagement"
      ],
      "mitigation": [
        "implement quick user feedback loops",
        "enhance model with user data"
      ]
    },
    "go_to_market": {
      "hooks": [
        "before/after demo",
        "real-time productivity boosts"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Slack"
      ],
      "pricing": {
        "free": "Up to 5 screenshots per week",
        "pro": "$9.99 per month for unlimited access",
        "business": "$29.99 per month for team accounts"
      }
    },
    "moat": [
      "user habituation to tool",
      "feedback-driven model improvement",
      "integration with popular productivity platforms"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "This idea beats conventional tools by focusing on direct utility from visual-to-text and offering a value that is experiential rather than just transactional."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}