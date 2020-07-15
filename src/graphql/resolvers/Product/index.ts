const productResolvers = {
  Query: {
    allDrivers: async (parent, args, context, info) => {
      const { fetchDriver, fetchDriverLocation } = context
      const fetchData: any = await fetchDriver()
      let driver: any = fetchData.allDrivers
      const fetchLocation: any = await fetchDriverLocation()
      const driverLocations = fetchLocation.getDriverLocations

      const functionzx = (driverId) => {
        if (driverLocations === null) {
          return undefined
        }

        const filteredLoc = driverLocations.filter(
          (loc) => loc.driverId == driverId,
        )

        return filteredLoc[filteredLoc.length - 1] || {}
      }
      return driver.map((i) => {
        const location = functionzx(i.id)
        return {}
      })
    },
  },
}

export default productResolvers
