# playwright-demo

Playwright test solution boilerplate.

## Structure

Three test design patterns will be showcased in this solution:

1. Functional page object pattern - there is absolutely no requirement to use the pattern with an object-oriented paradigm. Many people just learned to use it with Java. Javascript is not an object-oriented language. Classes, methods and members are just syntactical sugar. Under the hood it's all translated to object prototyping.

   🎯 Benefits of This Approach
   ✅ Functional & Composable – No classes, just pure functions.
   ✅ Reusable – Shared utils.js makes actions modular.
   ✅ Scalable – Easy to extend by adding more page objects.

2. Object-oriented page object pattern. This should be very familiar within companies where object-oriented languages are used extensively. Inheritance provides a nice logical way to structure actions common between components or pages. Though composition is almost always more flexible and powerful.
3. Screenplay test design pattern - adds another layer of abstraction. Splits the structure into several components: the actor, the interactions (and interrogations), the page components and the application under test.

## Support for multiple environments

Use the `.env.example` file to generate other `.env` files specific to each execution environment including the engineer's local machine. These are usually not committed to the repo due to possible sensitive data.

## References

Martin Fowler's post on the Page Object - https://martinfowler.com/bliki/PageObject.html
Great article on the topic of Screenplay pattern - https://ideas.riverglide.com/page-objects-refactored-12ec3541990
