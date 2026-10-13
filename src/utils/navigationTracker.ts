/**
 * FINOVA Navigation Tracking & Route-Aware History Utility
 * Manages internal app navigation history to prevent external exits
 * and compute intelligent, context-aware back navigation labels and destinations.
 */

const STORAGE_KEY = 'finova_internal_history';
const MAX_HISTORY_LENGTH = 25;

export interface NavInfo {
  label: string;
  destination: string;
  breadcrumb?: string;
}

/**
 * Normalizes a hash route string (e.g. "#/product/fin-01" -> "/product/fin-01")
 */
export function normalizeRoute(hash: string): string {
  if (!hash) return '/';
  const clean = hash.replace(/^#\/?/, '').split('?')[0];
  return clean ? `/${clean}` : '/';
}

/**
 * Retrieves the stored internal history stack
 */
export function getHistoryStack(): string[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Records a navigation event into the internal history
 */
export function recordNavigation(hash: string): void {
  try {
    const normalized = normalizeRoute(hash);
    const stack = getHistoryStack();

    // Avoid duplicate adjacent pushes
    if (stack.length > 0 && stack[stack.length - 1] === normalized) {
      return;
    }

    stack.push(normalized);
    if (stack.length > MAX_HISTORY_LENGTH) {
      stack.shift();
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stack));
  } catch (err) {
    console.warn('Navigation tracking error:', err);
  }
}

/**
 * Returns the immediate previous internal route if available
 */
export function getPreviousRoute(): string | null {
  const stack = getHistoryStack();
  if (stack.length >= 2) {
    return stack[stack.length - 2];
  }
  return null;
}

/**
 * Safely pops the current route and navigates to the previous route or fallback
 */
export function navigateBack(fallbackRoute: string = '#/'): void {
  try {
    const stack = getHistoryStack();
    if (stack.length >= 2) {
      // Pop current
      stack.pop();
      const prev = stack.pop(); // Take previous
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stack));
      if (prev) {
        window.location.hash = prev === '/' ? '#/' : `#${prev}`;
        return;
      }
    }
  } catch {
    // ignore
  }

  // Safe fallback
  window.location.hash = fallbackRoute;
}

/**
 * Derives user-friendly display name for a route
 */
function getRouteFriendlyName(route: string): string {
  if (!route || route === '/') return 'Home';
  if (route.startsWith('/explore')) return 'Explore';
  if (route.startsWith('/collections')) return 'Collections';
  if (route.startsWith('/journal')) return 'Journal';
  if (route.startsWith('/guides')) return 'Guides';
  if (route.startsWith('/learn')) return 'Learn Hub';
  if (route.startsWith('/tools')) return 'Tools';
  if (route.startsWith('/search')) return 'Search';
  if (route.startsWith('/wishlist')) return 'Wishlist';
  if (route.startsWith('/cart')) return 'Cart';
  if (route.startsWith('/about')) return 'About';
  if (route.startsWith('/faq')) return 'FAQ';
  if (route.startsWith('/contact')) return 'Contact';
  if (route.startsWith('/product')) return 'Product';
  return 'Back';
}

/**
 * Calculates the intelligent label and destination for the current route
 */
export function computeBackNavigation(currentHash: string): NavInfo {
  const currentRoute = normalizeRoute(currentHash);
  const previousRoute = getPreviousRoute();

  // Root or Home: no back button needed
  if (currentRoute === '/' || currentRoute === '') {
    return { label: 'Home', destination: '#/' };
  }

  // 1. Product Detail Page (/product/:id)
  if (currentRoute.startsWith('/product/')) {
    if (previousRoute && previousRoute.startsWith('/search')) {
      return { label: 'Back to Search', destination: '#/search', breadcrumb: 'Search' };
    }
    if (previousRoute && previousRoute.startsWith('/collections')) {
      return { label: 'Back to Collections', destination: '#/collections', breadcrumb: 'Collections' };
    }
    if (previousRoute && previousRoute.startsWith('/wishlist')) {
      return { label: 'Back to Wishlist', destination: '#/wishlist', breadcrumb: 'Wishlist' };
    }
    if (previousRoute && previousRoute.startsWith('/cart')) {
      return { label: 'Back to Cart', destination: '#/cart', breadcrumb: 'Cart' };
    }
    return { label: 'Back to Explore', destination: '#/explore', breadcrumb: 'Explore' };
  }

  // 2. Article / Journal / Guide Detail Pages
  if (currentRoute.startsWith('/journal/') || currentRoute.startsWith('/article/')) {
    if (previousRoute && previousRoute.startsWith('/learn')) {
      return { label: 'Back to Learn Hub', destination: '#/learn', breadcrumb: 'Learn Hub' };
    }
    if (previousRoute && previousRoute.startsWith('/search')) {
      return { label: 'Back to Search', destination: '#/search', breadcrumb: 'Search' };
    }
    return { label: 'Back to Journal', destination: '#/journal', breadcrumb: 'Journal' };
  }

  if (currentRoute.startsWith('/learn/article/')) {
    if (previousRoute && previousRoute.startsWith('/journal')) {
      return { label: 'Back to Journal', destination: '#/journal', breadcrumb: 'Journal' };
    }
    return { label: 'Back to Learn Hub', destination: '#/learn', breadcrumb: 'Learn Hub' };
  }

  // 3. Tool Calculators (/tools/budget, /tools/compound-growth, etc.)
  if (currentRoute.startsWith('/tools/')) {
    return { label: 'Back to Tools', destination: '#/tools', breadcrumb: 'Financial Tools' };
  }

  // 4. Tools Hub (/tools)
  if (currentRoute === '/tools') {
    if (previousRoute && previousRoute.startsWith('/explore')) {
      return { label: 'Back to Explore', destination: '#/explore', breadcrumb: 'Explore' };
    }
    return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
  }

  // 5. Guides (/guides)
  if (currentRoute === '/guides') {
    if (previousRoute && previousRoute.startsWith('/learn')) {
      return { label: 'Back to Learn Hub', destination: '#/learn', breadcrumb: 'Learn Hub' };
    }
    return { label: 'Back to Learn Hub', destination: '#/learn', breadcrumb: 'Learn Hub' };
  }

  // 6. Journal (/journal)
  if (currentRoute === '/journal') {
    if (previousRoute && previousRoute.startsWith('/learn')) {
      return { label: 'Back to Learn Hub', destination: '#/learn', breadcrumb: 'Learn Hub' };
    }
    return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
  }

  // 7. Learn Hub (/learn)
  if (currentRoute === '/learn') {
    return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
  }

  // 8. Collections (/collections)
  if (currentRoute === '/collections') {
    if (previousRoute && previousRoute.startsWith('/explore')) {
      return { label: 'Back to Explore', destination: '#/explore', breadcrumb: 'Explore' };
    }
    return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
  }

  // 9. Explore (/explore)
  if (currentRoute === '/explore') {
    return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
  }

  // 10. Search (/search)
  if (currentRoute === '/search') {
    if (previousRoute && previousRoute !== '/search') {
      const name = getRouteFriendlyName(previousRoute);
      return { label: `Back to ${name}`, destination: `#${previousRoute}`, breadcrumb: name };
    }
    return { label: 'Back to Explore', destination: '#/explore', breadcrumb: 'Explore' };
  }

  // 11. Wishlist (/wishlist)
  if (currentRoute === '/wishlist') {
    if (previousRoute && previousRoute.startsWith('/product/')) {
      return { label: 'Back to Product', destination: `#${previousRoute}`, breadcrumb: 'Product' };
    }
    return { label: 'Back to Explore', destination: '#/explore', breadcrumb: 'Explore' };
  }

  // 12. Cart (/cart)
  if (currentRoute === '/cart') {
    if (previousRoute && previousRoute.startsWith('/product/')) {
      return { label: 'Back to Product', destination: `#${previousRoute}`, breadcrumb: 'Product' };
    }
    return { label: 'Back to Explore', destination: '#/explore', breadcrumb: 'Explore' };
  }

  // 13. Static Pages (About, FAQ, Contact)
  if (currentRoute === '/about' || currentRoute === '/faq' || currentRoute === '/contact') {
    if (previousRoute && previousRoute !== currentRoute) {
      const name = getRouteFriendlyName(previousRoute);
      return { label: `Back to ${name}`, destination: `#${previousRoute}`, breadcrumb: name };
    }
    return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
  }

  // 14. 404 or any other deep links
  return { label: 'Back to Home', destination: '#/', breadcrumb: 'Home' };
}
