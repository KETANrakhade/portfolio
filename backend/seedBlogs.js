const mongoose = require('mongoose');
require('dotenv').config();
const Blog = require('./models/Blog');

const sampleBlogs = [
  {
    title: 'Building Scalable MERN Applications: Best Practices',
    slug: 'building-scalable-mern-applications',
    preview: 'Learn the essential best practices for building production-ready MERN stack applications that scale efficiently.',
    content: `
# Building Scalable MERN Applications: Best Practices

Building scalable applications requires careful planning and implementation of best practices from the ground up. In this comprehensive guide, I'll share insights from my experience building production applications at Codeberg IT.

## Architecture Matters

The foundation of any scalable application lies in its architecture. When working with the MERN stack, I follow a modular approach that separates concerns and makes the codebase maintainable.

### Backend Architecture

On the backend, I structure my Node.js applications using the MVC pattern:

- **Models**: Define data schemas with Mongoose
- **Controllers**: Handle business logic
- **Routes**: Define API endpoints
- **Middleware**: Handle authentication, validation, and error handling

This separation makes it easy to test individual components and scale specific parts of the application independently.

### Frontend Architecture

For React applications, I use a component-based architecture with clear separation:

- **Pages**: Top-level route components
- **Components**: Reusable UI components
- **Hooks**: Custom hooks for shared logic
- **Context**: Global state management
- **Utils**: Helper functions and constants

## Performance Optimization

Performance is crucial for user experience. Here are key optimizations I implement:

### Database Optimization

- Use indexes on frequently queried fields
- Implement pagination for large datasets
- Use aggregation pipelines for complex queries
- Cache frequently accessed data with Redis

### Frontend Optimization

- Code splitting with React.lazy()
- Image optimization and lazy loading
- Memoization with useMemo and useCallback
- Virtual scrolling for long lists

## Security Best Practices

Security should never be an afterthought:

- Implement JWT authentication with refresh tokens
- Validate and sanitize all user inputs
- Use HTTPS in production
- Implement rate limiting on API endpoints
- Keep dependencies updated

## Deployment Strategy

I use a CI/CD pipeline for automated deployments:

- GitHub Actions for automated testing
- Docker for containerization
- AWS/DigitalOcean for hosting
- MongoDB Atlas for database
- Nginx as reverse proxy

## Monitoring and Logging

Production applications need proper monitoring:

- Use PM2 for process management
- Implement structured logging
- Set up error tracking with Sentry
- Monitor performance metrics
- Set up alerts for critical issues

## Conclusion

Building scalable MERN applications is a journey of continuous learning and improvement. These practices have helped me deliver robust applications that handle real-world traffic and complexity.

Remember: premature optimization is the root of all evil, but planning for scale from the start saves countless hours of refactoring later.

Happy coding! 🚀
    `,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    author: 'Ketan Rakhade',
    readTime: '8 min read',
    tags: ['MERN', 'Scalability', 'Best Practices', 'Architecture'],
  },
  {
    title: 'Modern React Patterns: Hooks, Context, and Performance',
    slug: 'modern-react-patterns',
    preview: 'Explore advanced React patterns and techniques to write cleaner, more performant code in your applications.',
    content: `
# Modern React Patterns: Hooks, Context, and Performance

React has evolved significantly with the introduction of Hooks. Let me share the patterns I use daily to build efficient React applications.

## Custom Hooks: The Power of Reusability

Custom hooks are game-changers for code reusability. Here's why I love them:

### Data Fetching Hook

Instead of repeating fetch logic, I create a useApi hook:

\`\`\`javascript
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
\`\`\`

This pattern keeps components clean and focused on rendering.

## Context API: Smart State Management

For global state, I use Context API strategically:

### When to Use Context

- Theme preferences
- User authentication state
- Language/localization
- Global UI state (modals, notifications)

### When NOT to Use Context

- Frequently changing data (use state management libraries)
- Data that doesn't need to be global
- Performance-critical updates

## Performance Optimization Techniques

### 1. Memoization

Use React.memo for expensive components:

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
});
\`\`\`

### 2. useMemo and useCallback

Prevent unnecessary recalculations:

\`\`\`javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

### 3. Code Splitting

Load components only when needed:

\`\`\`javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

## Component Composition Patterns

### Compound Components

Create flexible, reusable component APIs:

\`\`\`javascript
<Tabs>
  <TabList>
    <Tab>First</Tab>
    <Tab>Second</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
  </TabPanels>
</Tabs>
\`\`\`

### Render Props

Share code between components:

\`\`\`javascript
<DataProvider render={data => <DisplayComponent data={data} />} />
\`\`\`

## Error Boundaries

Always implement error boundaries for graceful error handling:

\`\`\`javascript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
\`\`\`

## Testing Strategies

Write tests that give confidence:

- Unit tests for utility functions
- Integration tests for user flows
- E2E tests for critical paths
- Use React Testing Library for component tests

## Conclusion

Modern React development is about choosing the right patterns for the right problems. These patterns have helped me build maintainable, performant applications at Codeberg IT.

Keep experimenting, keep learning! ⚛️
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    author: 'Ketan Rakhade',
    readTime: '10 min read',
    tags: ['React', 'Hooks', 'Performance', 'Patterns'],
  },
  {
    title: 'MongoDB Optimization: From Slow Queries to Lightning Fast',
    slug: 'mongodb-optimization-guide',
    preview: 'Transform your MongoDB performance with these proven optimization techniques and indexing strategies.',
    content: `
# MongoDB Optimization: From Slow Queries to Lightning Fast

Database performance can make or break your application. Here's how I optimize MongoDB for production workloads.

## Understanding Query Performance

The first step is measuring what you're optimizing. MongoDB provides excellent tools:

### Using explain()

Always analyze your queries:

\`\`\`javascript
db.collection.find({ status: 'active' }).explain('executionStats');
\`\`\`

Look for:
- Documents examined vs returned
- Index usage
- Execution time
- Query plan

## Indexing Strategies

Indexes are your best friend for query performance.

### Single Field Indexes

Create indexes on frequently queried fields:

\`\`\`javascript
db.users.createIndex({ email: 1 });
\`\`\`

### Compound Indexes

For queries with multiple conditions:

\`\`\`javascript
db.orders.createIndex({ userId: 1, createdAt: -1 });
\`\`\`

### Text Indexes

For full-text search:

\`\`\`javascript
db.articles.createIndex({ title: 'text', content: 'text' });
\`\`\`

## Schema Design Patterns

### Embedding vs Referencing

**Embed when:**
- Data is accessed together
- One-to-few relationships
- Data doesn't change often

**Reference when:**
- Data is accessed independently
- One-to-many or many-to-many
- Data changes frequently

### The Subset Pattern

Store frequently accessed data in the main document:

\`\`\`javascript
{
  _id: ObjectId(),
  title: 'Product',
  recentReviews: [...], // Last 5 reviews
  reviewCount: 150
}
\`\`\`

## Aggregation Pipeline Optimization

### Use $match Early

Filter documents as early as possible:

\`\`\`javascript
db.orders.aggregate([
  { $match: { status: 'completed' } }, // Filter first
  { $group: { _id: '$userId', total: { $sum: '$amount' } } }
]);
\`\`\`

### Use $project to Reduce Data

Only include fields you need:

\`\`\`javascript
{ $project: { name: 1, email: 1, _id: 0 } }
\`\`\`

## Connection Pooling

Configure connection pools properly:

\`\`\`javascript
mongoose.connect(uri, {
  maxPoolSize: 10,
  minPoolSize: 5,
  socketTimeoutMS: 45000,
});
\`\`\`

## Monitoring and Maintenance

### Regular Maintenance Tasks

- Monitor slow queries
- Analyze index usage
- Remove unused indexes
- Update statistics
- Plan for sharding if needed

### Using MongoDB Atlas

For production, I recommend MongoDB Atlas:
- Automated backups
- Performance monitoring
- Automatic scaling
- Security features

## Caching Strategies

Implement caching for frequently accessed data:

- Use Redis for session data
- Cache aggregation results
- Implement TTL for cache invalidation
- Use MongoDB's built-in caching

## Real-World Example

At Codeberg IT, we optimized a slow query from 5 seconds to 50ms:

**Before:**
\`\`\`javascript
db.products.find({ category: 'electronics', price: { $lt: 1000 } });
\`\`\`

**After:**
\`\`\`javascript
// Added compound index
db.products.createIndex({ category: 1, price: 1 });

// Same query now uses index
db.products.find({ category: 'electronics', price: { $lt: 1000 } });
\`\`\`

## Conclusion

MongoDB optimization is an iterative process. Start with proper indexing, monitor your queries, and optimize based on real usage patterns.

Remember: premature optimization is wasteful, but planning for performance from the start saves headaches later.

Happy optimizing! 🚀
    `,
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    author: 'Ketan Rakhade',
    readTime: '12 min read',
    tags: ['MongoDB', 'Database', 'Optimization', 'Performance'],
  },
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ MongoDB Connected');
  
  // Clear existing blogs
  await Blog.deleteMany({});
  console.log('🗑️  Cleared existing blogs');
  
  // Insert sample blogs
  await Blog.insertMany(sampleBlogs);
  console.log('✅ Sample blogs inserted');
  
  console.log('🎉 Database seeded successfully!');
  process.exit(0);
})
.catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
