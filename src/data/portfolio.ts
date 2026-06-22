export const personalInfo = {
  name: 'Shreeya Maliye',
  title: 'Cloud & DevOps Engineer',
  tagline: 'Automating Infrastructure • Scaling Cloud Platforms • Building Reliable Systems',
  location: 'Maharashtra, India',
  summary:
    'Cloud & DevOps Engineer with 1+ year of production experience designing, automating, and operating cloud-native infrastructure and CI/CD pipelines on AWS. Experienced in Kubernetes, Terraform, Docker, GitLab CI/CD, Prometheus, Grafana, Loki, CloudWatch, and AWS cloud services. Passionate about Infrastructure as Code, DevSecOps, Observability, and Platform Engineering.',
  email: 'shreeya.maliye@example.com',
  resumeUrl: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/shreeya-maliye-81a20723b/',
    github: 'https://github.com/Shreey07m',
    email: 'mailto:shreeyamaliye@gmail.com',
  },
}

export const heroTech = ['AWS', 'Kubernetes', 'Terraform', 'GitLab CI/CD', 'Observability']

export const terminalCommands = [
  { command: 'terraform apply', output: '✔ Infrastructure provisioned' },
  { command: 'docker build', output: '✔ Image created' },
  { command: 'gitlab pipeline run', output: '✔ Deployment successful' },
  { command: 'kubectl get pods', output: '✔ All services healthy' },
  { command: 'monitoring status', output: '✔ System operational' },
]

export const metrics = [
  { value: 1, suffix: '+', label: 'Years Production Experience' },
  { value: 40, suffix: '%', label: 'Faster Deployments' },
  { value: 10, suffix: '+', label: 'Production Services Managed' },
  { value: 9.32, suffix: '', label: 'Academic CGPA' },
  { value: null, text: 'AWS Certified', label: 'Cloud Certification' },
  { value: null, text: 'SIH 2024 Grand Finalist', label: 'Hackathon Achievement' },
]

export const focusAreas = [
  'Cloud Engineering',
  'Platform Engineering',
  'Kubernetes',
  'Infrastructure as Code',
  'DevSecOps',
  'CI/CD Automation',
  'Observability',
]

export const education = {
  degree: 'BTech. Computer Science Engineering',
  honors: 'Honors Degree in Cloud Computing',
  university: 'Maharashtra Institute of Technology, Chh. Sambhajinagar',
}

export const pipelineStages = [
  { id: 'gitlab', label: 'GitLab', icon: '🔀' },
  { id: 'build', label: 'Build', icon: '🔨' },
  { id: 'sonar', label: 'SonarCloud', icon: '🔍' },
  { id: 'trivy', label: 'Trivy Scan', icon: '🛡️' },
  { id: 'docker', label: 'Docker Build', icon: '🐳' },
  { id: 'ecr', label: 'Amazon ECR', icon: '📦' },
  { id: 'terraform', label: 'Terraform', icon: '🏗️' },
  { id: 'ecs', label: 'AWS ECS / EKS', icon: '☸️' },
  { id: 'prod', label: 'Production', icon: '🚀' },
]

export const skillCategories = {
  Cloud: [
    'AWS',
    'EC2',
    'ECS',
    'EKS',
    'S3',
    'CloudFront',
    'RDS',
    'Lambda',
    'VPC',
    'IAM',
    'CloudWatch',
    'API Gateway',
  ],
  DevOps: ['Docker', 'Kubernetes', 'Terraform', 'GitLab CI/CD', 'GitHub Actions', 'Linux', 'Nginx'],
  Observability: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
  Security: ['SonarCloud', 'Trivy', 'IAM', 'Network Isolation'],
  Programming: ['Python', 'Shell Scripting'],
}

export const experience = {
  role: 'Cloud Engineer',
  company: 'Arthan Finance Pvt Ltd',
  highlights: [
    'Reduced deployment time by 40%',
    'Managed production deployments',
    'Built observability platform',
    'Reduced MTTD from 15 minutes to under 3 minutes',
    'Implemented blue-green deployments',
    'Designed AWS networking infrastructure',
    'Automated CI/CD pipelines',
  ],
  previous: {
    role: 'R&D Intern',
    company: 'EduDiagno Pvt Ltd',
    highlights: [
     'Built and deployed a production-grade Job Portal on AWS',
     'Developed an ML-powered job recommendation engine',
     'Improved job-match relevance by 30%',
     'Implemented AWS EC2 and S3 based deployment architecture',
     'Ensured production reliability through end-to-end testing'
    ]
  },
}

export const projects = [
  {
    id: 1,
    title: '11-Microservice E-Commerce Platform on AWS EKS',
    tech: ['AWS EKS', 'Terraform', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    features: ['11 microservices', 'Terraform automation', 'Observability stack', 'GitOps deployment'],
   // github: 'https://github.com/shreeya-maliye/eks-ecommerce',
    // demo: 'https://demo.example.com',
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 2,
    title: 'DevSecOps CI/CD Pipeline on AWS ECS',
    tech: ['GitLab CI/CD', 'SonarCloud', 'Trivy', 'Docker', 'Amazon ECS', 'ALB'],
    features: ['Security scanning', 'Automated deployment', 'Zero downtime release'],
    //github: 'https://github.com/shreeya-maliye/devsecops-ecs',
    // demo: 'https://demo.example.com',
    gradient: 'from-blue-500/20 to-purple-600/20',
  },
  {
  id: 3,
  title: 'Image Quality Assessment System',
  tech: [
    'Python',
    'Machine Learning',
    'OpenCV',
    'VGG16',
    'ResNet50',
    'TensorFlow'
  ],
  features: [
    'Analyzed image quality using sharpness, noise, and resolution metrics',
    'Implemented VGG16 and ResNet50 models for image quality evaluation',
    'Recommended removal of low-quality and duplicate images for storage optimization'
  ],
  github: 'https://github.com/Shreey07m/Image-Quality-Assessment',
  // demo: '#',
  gradient: 'from-green-500/20 to-emerald-600/20',
},
  {
  id: 4,
  title: 'AWS Terraform Infrastructure Automation',
  tech: ['Terraform', 'AWS EC2', 'VPC', 'IAM', 'Security Groups', 'Linux'],
  features: [
    'Designed cloud infrastructure using Terraform Infrastructure as Code',
    'Automated provisioning of AWS resources including networking and compute',
    'Created modular and reusable Terraform configurations for deployment consistency'
  ],
  github: 'https://github.com/Shreey07m/aws-terraform-infrastructure',
  // demo: '#',
  gradient: 'from-blue-500/20 to-cyan-600/20',
},
  {
  id: 5,
  title: 'Highly Available AWS 3-Tier Architecture',
  tech: [
    'AWS',
    'EC2',
    'RDS',
    'VPC',
    'ALB',
    'Auto Scaling'
  ],
  features: [
    'Architected a scalable 3-tier cloud infrastructure on AWS',
    'Implemented secure networking with public/private subnet isolation',
    'Configured load balancing and database layers for high availability'
  ],
  github: 'https://github.com/Shreey07m/3-Tier-Architecture-',
  // demo: '#',
  gradient: 'from-orange-500/20 to-red-600/20',
}
]

export const architectureNodes = [
  { id: 'users', label: 'Users', icon: '👥' },
  { id: 'cloudfront', label: 'CloudFront', icon: '🌐' },
  { id: 'alb', label: 'Application Load Balancer', icon: '⚖️' },
  { id: 'cluster', label: 'ECS / EKS Cluster', icon: '☸️' },
  { id: 'rds', label: 'RDS', icon: '🗄️' },
  { id: 's3', label: 'S3', icon: '📦' },
]

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: '☁️',
  },
  {
    title: 'Cybersecurity Level-1',
    issuer: 'Certified Professional',
    icon: '🔐',
  },
]

export const achievements = [
  {
    title: 'Smart India Hackathon 2024 Grand Finalist',
    description: 'National-level innovation challenge finalist',
    icon: '🏆',
  },
  {
    title: 'B.Tech CSE Silver Medalist',
    description: 'Academic excellence in Computer Science',
    icon: '🥈',
  },
]

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#metrics', label: 'Impact' },
  { href: '#about', label: 'About' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]
