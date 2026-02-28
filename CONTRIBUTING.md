# Contributing Guide

## Development Setup

### Prerequisites
- Node.js 20+
- Java 17+
- Maven 3.9+
- Docker & Docker Compose
- Git

### Getting Started

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/end-glory-hotel.git
cd end-glory-hotel
```

3. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

### Backend Development

```bash
cd backend
mvn spring-boot:run
```

## Code Standards

### Frontend
- Use TypeScript strict mode
- Follow ESLint rules
- Format with Prettier
- Use functional components
- Implement proper error handling

### Backend
- Follow Java naming conventions
- Use Lombok for boilerplate reduction
- Write meaningful commit messages
- Add Javadoc for public methods
- Implement proper exception handling

## Testing

### Frontend
```bash
npm run test
npm run lint
```

### Backend
```bash
mvn test
mvn verify
```

## Commit Messages

Format: `type(scope): message`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

Example:
```
feat(booking): add email notification
fix(rooms): resolve filter bug
docs(readme): update installation steps
```

## Pull Request Process

1. Update documentation
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review from maintainers

## Questions?

Open an issue or contact the maintainers.
