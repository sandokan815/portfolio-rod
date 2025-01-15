import {
  // FE
  SiNextdotjs,
  SiBootstrap,
  SiAntdesign,
  SiGatsby,
  SiSvelte,
  SiVuetify,
  SiNuxtdotjs,
  SiGraphql,
  // BE
  // SiDjango,
  SiFlask,
  SiExpress,
  SiSocketdotio,
  SiMagento,
  SiWoocommerce,
  SiPrestashop,
  SiSwift,
  SiIonic,
  SiReact,
  SiKotlin,
  // SiPrisma,
  // SiNestjs,
  // SiLaravel,
  // SiAwsamplify,
  // DB
  // SiPostgresql
  // SiHomebrew,
} from "react-icons/si";
import {
  // FramerMotionIcon,
  ReactRouterDomIcon,
  // VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import PHPSvg from "@/public/icons/php.svg";
import JQuerySvg from "@/public/icons/jquery.svg";
import JavaSvg from "@/public/icons/java.svg";
import SwiftSvg from "@/public/icons/swift.svg";
import AngularSvg from "@/public/icons/angular.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import VueSvg from "@/public/icons/vue.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import DjangoSvg from "@/public/icons/django.svg";
import NestjsSvg from "@/public/icons/nestjs.svg";
import LaravelSvg from "@/public/icons/laravel.svg";

// eCommerce
import OpenCartSvg from "@/public/icons/Opencart.svg";
import NopCommerceSvg from "@/public/icons/nopcommerce.svg";

// Database
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgresqlSvg from "@/public/icons/postgresql.svg";
import MysqlSvg from "@/public/icons/mysql.svg";
import DynamoDBSvg from "@/public/icons/DynamoDB.svg";
import SQLiteSvg from "@/public/icons/sqlite.svg";
import PrismaSvg from "@/public/icons/prisma.svg";

// DevOps
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import AwsLambdaSvg from "@/public/icons/aws-lambda.svg";
import AwsappsyncSvg from "@/public/icons/AppSync.svg";
import AwsamplifySvg from "@/public/icons/Amplify.svg";
import AwsapigatewaySvg from "@/public/icons/API Gateway.svg";
import AwsstepfunctionsSvg from "@/public/icons/Step Functions.svg";
import Awsec2Svg from "@/public/icons/EC2.svg";
import Awss3Svg from "@/public/icons/Simple Storage Service.svg";
import AwscloudfrontSvg from "@/public/icons/CloudFront.svg";
import AwscognitoSvg from "@/public/icons/Cognito.svg";
import Awsroute53Svg from "@/public/icons/Route 53.svg";
import GCPSvg from "@/public/icons/gcp.svg";
import FirebaseSvg from "@/public/icons/firebase-svgrepo-com.svg";
import AzureSvg from "@/public/icons/azure-svgrepo-com.svg";

// Version Control Tools
import GitSvg from "@/public/icons/git.svg";
import GithubSvg from "@/public/icons/github.svg";
import GitlabSvg from "@/public/icons/gitlab.svg";
import BitbucketSvg from "@/public/icons/bitbucket.svg";

// Package Management Tools
import NpmSvg from "@/public/icons/npm-svgrepo-com.svg";
import YarnSvg from "@/public/icons/yarn-svgrepo-com.svg";
import BrewSvg from "@/public/icons/homebrew-svgrepo-com.svg";
import ComposerSvg from "@/public/icons/composer-svgrepo-com.svg";
import PnpmSvg from "@/public/icons/light-pnpm-svgrepo-com.svg";
import BowerSvg from "@/public/icons/bower-svgrepo-com.svg";
import CocoapodsSvg from "@/public/icons/cocoapods-svgrepo-com.svg";

// Task Management Tools
import JiraSvg from "@/public/icons/jira-svgrepo-com.svg";
import AsanaSvg from "@/public/icons/asana-svgrepo-com.svg";
import MondaySvg from "@/public/icons/monday-icon-svgrepo-com.svg";
import TrelloSvg from "@/public/icons/trello-color-svgrepo-com.svg";

// other tools
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "HTML5",
        icon: HtmlSvg,
      },
      {
        name: "CSS3",
        icon: CssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "PHP",
        icon: PHPSvg,
      },
      {
        name: "jQuery",
        icon: JQuerySvg,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "Swift",
        icon: SwiftSvg,
      },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "AntDesign",
        icon: SiAntdesign,
      },
      {
        name: "NextJS",
        icon: SiNextdotjs,
      },
      {
        name: "Gatsby",
        icon: SiGatsby,
      },
      {
        name: "Svelte.js",
        icon: SiSvelte,
      },
      {
        name: "Vue.js",
        icon: VueSvg,
      },
      {
        name: "Vuetify",
        icon: SiVuetify,
      },
      {
        name: "Nuxt.js",
        icon: SiNuxtdotjs,
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "NestJS",
        icon: NestjsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "Django",
        icon: DjangoSvg,
      },
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
    ],
  },
  {
    sectionName: "eCommerce",
    skills: [
      {
        name: "Magento",
        icon: SiMagento,
      },
      {
        name: "WooCommerce",
        icon: SiWoocommerce,
      },
      {
        name: "PrestaShop",
        icon: SiPrestashop,
      },
      {
        name: "OpenCart",
        icon: OpenCartSvg,
      },
      {
        name: "NopCommerce",
        icon: NopCommerceSvg,
      },
    ],
  },
  {
    sectionName: "Mobile",
    skills: [
      {
        name: "Swift",
        icon: SiSwift,
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
      },
      {
        name: "Ionic",
        icon: SiIonic,
      },
      {
        name: "React Native",
        icon: SiReact,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgresql",
        icon: PostgresqlSvg,
      },
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
      {
        name: "DynamoDB",
        icon: DynamoDBSvg,
      },
      {
        name: "SQLite",
        icon: SQLiteSvg,
      },
      {
        name: "Prisma",
        icon: PrismaSvg,
      },
    ],
  },
  {
    sectionName: "DevOps | Cloud Platform",
    skills: [
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "AWS Lambda",
        icon: AwsLambdaSvg,
      },
      {
        name: "AWS AppSync",
        icon: AwsappsyncSvg,
      },
      {
        name: "AWS Amplify",
        icon: AwsamplifySvg,
      },
      {
        name: "AWS API Gateway",
        icon: AwsapigatewaySvg,
      },
      {
        name: "AWS Step Functions",
        icon: AwsstepfunctionsSvg,
      },
      {
        name: "AWS EC2",
        icon: Awsec2Svg,
      },
      {
        name: "AWS S3",
        icon: Awss3Svg,
      },
      {
        name: "AWS CloudFront",
        icon: AwscloudfrontSvg,
      },
      {
        name: "AWS Cognito",
        icon: AwscognitoSvg,
      },
      {
        name: "AWS Route53",
        icon: Awsroute53Svg,
      },
      {
        name: "Google Cloud Platform",
        icon: GCPSvg,
      },
      {
        name: "Firebase",
        icon: FirebaseSvg,
      },
      {
        name: "Microsoft Azure",
        icon: AzureSvg,
      },
    ],
  },
  {
    sectionName: "Version Control Tools",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: GithubSvg,
      },
      {
        name: "Gitlab",
        icon: GitlabSvg,
      },
      {
        name: "Bitbucket",
        icon: BitbucketSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
  {
    sectionName: "Package Management Tools",
    skills: [
      {
        name: "NPM",
        icon: NpmSvg,
      },
      {
        name: "Yarn",
        icon: YarnSvg,
      },
      {
        name: "Brew",
        icon: BrewSvg,
      },
      {
        name: "Composer",
        icon: ComposerSvg,
      },
      {
        name: "Pnpm",
        icon: PnpmSvg,
      },
      {
        name: "Bower",
        icon: BowerSvg,
      },
      {
        name: "CocoaPods",
        icon: CocoapodsSvg,
      },
    ],
  },
  {
    sectionName: "Task Management Tools",
    skills: [
      {
        name: "Jira",
        icon: JiraSvg,
      },
      {
        name: "Asana",
        icon: AsanaSvg,
      },
      {
        name: "Trello",
        icon: TrelloSvg,
      },
      {
        name: "Monday",
        icon: MondaySvg,
      },
    ],
  },
];
