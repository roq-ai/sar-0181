const mapping: Record<string, string> = {
  agencies: 'agency',
  bookings: 'booking',
  tours: 'tour',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
