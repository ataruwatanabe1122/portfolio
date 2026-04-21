export const profile = {
  name: "渡邊 暖",
  nameRuby: "ワタナベ アタル",
  role: "フロントエンドエンジニア",
  summary: `私は「物事を客観的に捉え、必要なアクションを自ら取る」ことを強みとし、常に全体最適を意識してプロジェクトに取り組んできました。
フロントエンド領域を主軸としつつ、バックエンドやインフラにも関心を持ち、技術的な境界を越えて学び・関わる姿勢を大切にしています。

スクラムマスターとして約1年間チームに従事し、開発プロセスの改善やチームビルディングの視点も培ってきました。
メンバーの特性を活かした関わりや、チーム全体の心理的安全性を意識したファシリテーションに努め、開発のスムーズな推進に貢献してきました。

業務では基本設計・詳細設計に加えて、開発からテスト設計まで担当した経験があり、技術・プロセス・チームの三位一体で価値提供することを意識しています。`,
  certifications: ["認定スクラムマスター RSM（Scrum Inc.）", "色彩検定2級"],
};

export const skillCategories = [
  {
    label: "フロントエンド",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue3",
      "Nuxt.js",
      "Angular",
      "JavaScript / jQuery",
      "HTML / CSS",
    ],
  },
  {
    label: "バックエンド",
    skills: ["Laravel / PHP", "Node.js"],
  },
  {
    label: "データベース",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    label: "テスト・品質",
    skills: ["Jest", "テスト設計", "テストケース作成"],
  },
  {
    label: "ツール・環境",
    skills: [
      "Git / GitHub / GitLab",
      "Docker",
      "AWS（CloudWatch）",
      "Jira / Confluence",
      "WordPress",
      "PhotoShop / Illustrator",
    ],
  },
  {
    label: "プロセス・マネジメント",
    skills: [
      "スクラムマスター",
      "チームビルディング",
      "要件整理",
      "基本設計 / 詳細設計",
      "スケジュール管理",
    ],
  },
];

export type Phase = "要件定義" | "基本設計" | "詳細設計" | "実装" | "単体テスト" | "結合テスト" | "保守・運用";

export interface Project {
  id: number;
  period: string;
  duration: string;
  title: string;
  overview: string;
  role: string;
  teamSize: string;
  techStack: string[];
  tools: string[];
  phases: Phase[];
}

export const projects: Project[] = [
  {
    id: 1,
    period: "2025年7月 〜 2026年3月",
    duration: "9ヶ月",
    title: "マイナンバーカード関連システムの運用保守",
    overview:
      "本番環境へのSQL反映手順書作成・事前検証、Angularを用いたフロントエンド開発、基本設計・詳細設計書作成、単体〜結合テストのケース作成・実施、コードレビュー、新人教育を担当。",
    role: "SE（フロントエンド / テスト / 設計）",
    teamSize: "5名（PM:1 / PL:1 / SE:3）",
    techStack: ["Java", "Angular", "Jest", "PostgreSQL"],
    tools: ["OCI", "Jira", "Confluence", "Slack", "Rlogin", "Senju"],
    phases: ["基本設計", "詳細設計", "実装", "単体テスト", "結合テスト", "保守・運用"],
  },
  {
    id: 2,
    period: "2024年7月 〜 2025年6月",
    duration: "12ヶ月",
    title: "通信キャリア向け WEB アプリケーション開発",
    overview:
      "スクラムマスターとしてチーム改善・ファシリテーションを担いながら、LaravelおよびReactを用いたフロントエンド開発を実施。案件窓口としてQA対応・要件整理・スケジュール管理、設計書更新、テスト項目レビュー、AWSログ調査を担当。",
    role: "スクラムマスター / フロントエンドエンジニア",
    teamSize: "11名（PO:2 / SM:3 / フロント:3 / バック:3）",
    techStack: ["Laravel", "React", "PHP"],
    tools: ["AWS", "Jira", "Confluence", "Miro", "Slack", "Teams", "Docker"],
    phases: ["要件定義", "基本設計", "詳細設計", "結合テスト", "保守・運用"],
  },
  {
    id: 3,
    period: "2024年3月 〜 2024年6月",
    duration: "4ヶ月",
    title: "請求データ管理サービスリニューアル",
    overview:
      "Nuxt.js（Vue3）を用いたドキュメント管理システムの開発。CRUD機能を持つ画面実装、Piniaによる状態管理、Atomic Designによるコンポーネント設計、TypeScriptを用いた型定義を担当。",
    role: "フロントエンドエンジニア",
    teamSize: "25名（PL:1 / フロント:4 / バック:10 / テスター:10）",
    techStack: ["TypeScript", "Vue3", "Nuxt.js", "HTML", "CSS", "MySQL"],
    tools: ["Node.js", "npm", "Git", "GitLab", "Docker", "Azure", "HeidiSQL", "Mantis"],
    phases: ["詳細設計", "実装", "結合テスト"],
  },
  {
    id: 4,
    period: "2023年11月 〜 2024年1月",
    duration: "3ヶ月",
    title: "社内プログラミング研修",
    overview:
      "JavaScript・React・jQuery・HTML/CSS・Sassを学習。React + React Router + RecoilによるToDoアプリのCRUD機能実装、Webpackによる開発環境構築、GitHubを使ったプルリクベースの運用を習得。",
    role: "研修受講者",
    teamSize: "個人",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "React"],
    tools: ["npm", "React Router", "Recoil", "webpack", "vite", "GitHub", "Slack"],
    phases: ["実装"],
  },
  {
    id: 5,
    period: "2021年4月 〜 2023年3月",
    duration: "24ヶ月",
    title: "WEB サイト運用・保守・動作チェック",
    overview:
      "HTML/CSS・jQueryによるコンテンツ追加・LP作成、WordPressによるサイト制作・運用保守、PowerCMSでのPR記事更新、PhotoShopでのキービジュアル・バナー制作、Illustratorでの名刺デザイン作成を担当。",
    role: "コーダー / デザイナー補佐",
    teamSize: "3名（SE:1 / コーダー:2）",
    techStack: ["HTML", "CSS", "jQuery", "WordPress"],
    tools: ["PowerCMS", "PhotoShop", "Illustrator"],
    phases: ["保守・運用"],
  },
];
