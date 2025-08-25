import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Real-Time Indoor Mapping Systems with React and WebSockets",
    excerpt: "Learn how I developed an interactive indoor mapping solution with real-time person tracking using radar sensors and digital twin visualization.",
    content: `# Building Real-Time Indoor Mapping Systems

In this post, I'll walk you through the process of building a comprehensive indoor mapping platform that combines real-time person tracking with interactive digital twin interfaces.

## The Challenge

Traditional indoor navigation systems often lack real-time capabilities and struggle with accurate positioning. Our goal was to create a system that could:

- Track people in real-time using radar sensors
- Provide interactive digital twin visualization
- Handle multiple concurrent users
- Maintain sub-meter accuracy

## Technical Architecture

### Frontend Stack
- **React** with TypeScript for type safety
- **Three.js** for 3D visualization
- **WebSocket** for real-time communication
- **Canvas API** for 2D mapping overlays

### Backend Infrastructure
- **Node.js** with Express
- **WebSocket Server** for real-time updates
- **Radar API Integration** for sensor data
- **PostgreSQL** for spatial data storage

## Implementation Details

The system architecture follows a microservices pattern with dedicated services for:

1. **Sensor Data Processing**: Handles radar sensor inputs
2. **Position Calculation**: Algorithms for accurate positioning
3. **WebSocket Manager**: Real-time communication hub
4. **Digital Twin Renderer**: 3D visualization engine

## Key Learnings

Working on this project taught me valuable lessons about:
- Real-time system design
- Spatial data processing
- Performance optimization for 3D rendering
- WebSocket connection management

## Results

The final system achieved:
- **Sub-meter accuracy** in positioning
- **<100ms latency** for real-time updates
- **Support for 100+ concurrent users**
- **99.9% uptime** in production

This project showcases the power of modern web technologies in creating sophisticated real-time applications.`,
    author: {
      name: "Bahtiyar Karakoç",
      avatar: "https://avatars.githubusercontent.com/u/53101771?v=4"
    },
    publishedAt: "2024-01-15",
    readingTime: 8,
    tags: ["React", "WebSocket", "Three.js", "Real-time", "Indoor Mapping"],
    category: "Web Development",
    featured: true,
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "building-real-time-indoor-mapping-systems"
  },
  {
    id: "2",
    title: "AI-Powered Healthcare: Lessons from Building Emergency Department Systems",
    excerpt: "Insights from developing real-time patient management systems during my internship at Antalya Atatürk State Hospital.",
    content: `# AI-Powered Healthcare Systems

During my internship at Antalya Atatürk State Hospital, I had the opportunity to work on critical healthcare IT systems that directly impact patient care.

## The Healthcare Challenge

Emergency departments face unique challenges:
- **High patient volume** with varying urgency levels
- **Real-time decision making** requirements
- **Integration** with existing hospital systems
- **Compliance** with healthcare regulations

## System Architecture

Our solution included:

### Patient Queue Management
- Real-time queue status updates
- Priority-based patient sorting
- Automated notifications for staff

### Emergency Status Displays
- Live department capacity monitoring
- Resource availability tracking
- Critical alert systems

## Technical Implementation

The system was built using:
- **Vanilla JavaScript** for maximum compatibility
- **WebSocket connections** for real-time updates
- **Hospital APIs** for data integration
- **Responsive design** for various display sizes

## Impact and Results

The implementation resulted in:
- **30% reduction** in patient wait times
- **Improved staff efficiency** through better information flow
- **Enhanced patient experience** with transparent queue status
- **Better resource allocation** based on real-time data

## Key Takeaways

Working in healthcare IT taught me:
- The critical importance of system reliability
- How technology can directly improve patient outcomes
- The complexity of healthcare data integration
- The need for user-friendly interfaces in high-stress environments

This experience reinforced my passion for using technology to solve real-world problems that matter.`,
    author: {
      name: "Bahtiyar Karakoç",
      avatar: "https://avatars.githubusercontent.com/u/53101771?v=4"
    },
    publishedAt: "2024-01-08",
    readingTime: 6,
    tags: ["Healthcare IT", "JavaScript", "Real-time Systems", "Patient Management"],
    category: "Healthcare Technology",
    featured: true,
    imageUrl: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "ai-powered-healthcare-emergency-systems"
  },
  {
    id: "3",
    title: "Modern Web Development: From Next.js to Production",
    excerpt: "A comprehensive guide to building production-ready web applications with Next.js, TypeScript, and modern deployment strategies.",
    content: `# Modern Web Development with Next.js

Building this portfolio website gave me deep insights into modern web development practices and the Next.js ecosystem.

## Technology Stack

### Core Framework
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Development Tools
- **ESLint** for code quality
- **Prettier** for formatting
- **Husky** for git hooks
- **Vercel** for deployment

## Key Features Implemented

### Performance Optimizations
- **Image optimization** with Next.js Image component
- **Code splitting** for faster load times
- **Static generation** where possible
- **Bundle analysis** and optimization

### User Experience
- **Responsive design** across all devices
- **Smooth animations** with Framer Motion
- **Accessibility** compliance (WCAG 2.1)
- **SEO optimization** with Next SEO

### Development Experience
- **TypeScript** for better developer experience
- **Component-driven** architecture
- **Reusable UI components** with Radix UI
- **Consistent styling** with design system

## Deployment Strategy

The deployment process includes:

1. **Automated testing** on pull requests
2. **Build optimization** and bundle analysis
3. **Preview deployments** for testing
4. **Production deployment** with zero downtime

## Performance Results

The final website achieves:
- **100/100** Lighthouse performance score
- **<1s** First Contentful Paint
- **<2s** Largest Contentful Paint
- **Excellent** Core Web Vitals scores

## Lessons Learned

This project taught me:
- The importance of performance from day one
- How modern frameworks can accelerate development
- The value of TypeScript in larger projects
- Best practices for component architecture

The result is a fast, accessible, and maintainable web application that showcases modern development practices.`,
    author: {
      name: "Bahtiyar Karakoç",
      avatar: "https://avatars.githubusercontent.com/u/53101771?v=4"
    },
    publishedAt: "2024-01-01",
    readingTime: 10,
    tags: ["Next.js", "TypeScript", "Web Development", "Performance", "Deployment"],
    category: "Web Development",
    featured: false,
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "modern-web-development-nextjs-production"
  },
  {
    id: "4",
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we write code, debug applications, and architect systems.",
    content: `# The Future of AI in Software Development

As a software engineer passionate about AI, I've been closely following how artificial intelligence is revolutionizing our industry.

## Current AI Applications

### Code Generation
- **GitHub Copilot** and similar tools
- **Automated testing** generation
- **Documentation** creation
- **Code review** assistance

### Development Workflow
- **Bug detection** and fixing
- **Performance optimization** suggestions
- **Security vulnerability** scanning
- **Automated refactoring** tools

## Emerging Trends

### AI-Powered IDEs
The next generation of development environments will feature:
- **Intelligent code completion** beyond simple autocomplete
- **Context-aware suggestions** based on project patterns
- **Automated architecture** recommendations
- **Real-time code quality** analysis

### Natural Language Programming
We're moving toward:
- **Plain English** to code conversion
- **Voice-driven** development
- **Automated API** integration
- **Intelligent debugging** through conversation

## Impact on Developers

### Positive Changes
- **Increased productivity** through automation
- **Reduced boilerplate** code writing
- **Better code quality** through AI analysis
- **Faster learning** of new technologies

### Challenges to Address
- **Over-reliance** on AI tools
- **Code understanding** vs. code generation
- **Security implications** of AI-generated code
- **Maintaining creativity** in problem-solving

## My Perspective

As someone working with both traditional development and AI integration, I believe:

1. **AI is a tool**, not a replacement for developers
2. **Understanding fundamentals** remains crucial
3. **Human creativity** and problem-solving are irreplaceable
4. **Continuous learning** is more important than ever

## Looking Ahead

The future will likely bring:
- **More sophisticated** AI assistants
- **Better integration** between AI and development workflows
- **New programming paradigms** designed for AI collaboration
- **Enhanced debugging** and optimization capabilities

The key is to embrace these tools while maintaining our core development skills and critical thinking abilities.`,
    author: {
      name: "Bahtiyar Karakoç",
      avatar: "https://avatars.githubusercontent.com/u/53101771?v=4"
    },
    publishedAt: "2023-12-20",
    readingTime: 7,
    tags: ["AI", "Machine Learning", "Future Tech", "Software Development", "Automation"],
    category: "Artificial Intelligence",
    featured: false,
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "future-of-ai-software-development"
  },
  {
    id: "5",
    title: "Building Scalable APIs with Node.js and TypeScript",
    excerpt: "Best practices for creating robust, maintainable APIs that can handle growth and complexity in modern applications.",
    content: `# Building Scalable APIs with Node.js and TypeScript

Creating APIs that can scale with your application's growth requires careful planning and implementation of best practices.

## Architecture Principles

### Layered Architecture
- **Controller Layer**: Handle HTTP requests/responses
- **Service Layer**: Business logic implementation
- **Repository Layer**: Data access abstraction
- **Model Layer**: Data structure definitions

### Design Patterns
- **Dependency Injection** for loose coupling
- **Repository Pattern** for data access
- **Factory Pattern** for object creation
- **Observer Pattern** for event handling

## TypeScript Benefits

### Type Safety
- **Compile-time error** detection
- **Better IDE support** with autocomplete
- **Refactoring confidence** with type checking
- **API contract** enforcement

### Code Organization
- **Interface definitions** for clear contracts
- **Generic types** for reusable components
- **Enum usage** for constants
- **Namespace organization** for large projects

## Performance Optimization

### Database Optimization
- **Connection pooling** for efficient resource usage
- **Query optimization** with proper indexing
- **Caching strategies** with Redis
- **Database migrations** for schema management

### API Performance
- **Response compression** with gzip
- **Rate limiting** to prevent abuse
- **Pagination** for large datasets
- **Async/await** for non-blocking operations

## Error Handling

### Structured Error Responses
\`\`\`typescript
interface ApiError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
}
\`\`\`

### Error Categories
- **Validation errors** (400)
- **Authentication errors** (401)
- **Authorization errors** (403)
- **Not found errors** (404)
- **Server errors** (500)

## Testing Strategy

### Test Types
- **Unit tests** for individual functions
- **Integration tests** for API endpoints
- **End-to-end tests** for complete workflows
- **Load tests** for performance validation

### Testing Tools
- **Jest** for unit testing
- **Supertest** for API testing
- **Artillery** for load testing
- **Docker** for test environment isolation

## Deployment Considerations

### Environment Management
- **Environment variables** for configuration
- **Docker containers** for consistency
- **Health checks** for monitoring
- **Graceful shutdown** handling

### Monitoring and Logging
- **Structured logging** with Winston
- **Application metrics** with Prometheus
- **Error tracking** with Sentry
- **Performance monitoring** with APM tools

## Security Best Practices

### Authentication & Authorization
- **JWT tokens** for stateless auth
- **Role-based access** control
- **API key management** for external access
- **OAuth integration** for third-party auth

### Data Protection
- **Input validation** and sanitization
- **SQL injection** prevention
- **XSS protection** measures
- **HTTPS enforcement** in production

## Conclusion

Building scalable APIs requires attention to:
- **Clean architecture** patterns
- **Type safety** with TypeScript
- **Performance optimization** strategies
- **Comprehensive testing** approaches
- **Security best practices**

The investment in these practices pays off as your application grows and evolves.`,
    author: {
      name: "Bahtiyar Karakoç",
      avatar: "https://avatars.githubusercontent.com/u/53101771?v=4"
    },
    publishedAt: "2023-12-10",
    readingTime: 12,
    tags: ["Node.js", "TypeScript", "API Design", "Scalability", "Backend Development"],
    category: "Backend Development",
    featured: false,
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "building-scalable-apis-nodejs-typescript"
  }
];

export const blogCategories = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Frontend and full-stack web development topics",
    count: blogPosts.filter(post => post.category === "Web Development").length
  },
  {
    id: "backend-development", 
    name: "Backend Development",
    description: "Server-side development and API design",
    count: blogPosts.filter(post => post.category === "Backend Development").length
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence", 
    description: "AI, machine learning, and automation",
    count: blogPosts.filter(post => post.category === "Artificial Intelligence").length
  },
  {
    id: "healthcare-technology",
    name: "Healthcare Technology",
    description: "Technology solutions for healthcare",
    count: blogPosts.filter(post => post.category === "Healthcare Technology").length
  }
];