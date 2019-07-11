export const authedResolver = (resolver: any) => async (obj, args, context, info) => {
  if (!context.user) {
    return Error('You must be logged in to do this.')
  }

  return resolver(obj, args, context, info)
}
