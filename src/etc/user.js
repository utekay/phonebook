
export const getFullName = (user) => {
  return `${user.name.first} ${user.name.last}`
}

export const getFullNameWithTitle = (user) => {
  return `${user.name.title}. ${getFullName(user)}`
}

export const getBirthDate = (user) => {
  return new Date(user.dob.date).toLocaleString().split(',')[0]
}

export const getNameFilterRegExp = (nameFilter) => {
  return new RegExp(nameFilter, 'i')
}

export const filterByName = (users, re) => {
  return users.filter((u) => ~u.name.first.search(re)
      || ~u.name.last.search(re)
  )
}

export const filterByBirthDate = (users, dates) => {
  return users.filter((u) => ~dates.indexOf(getBirthDate(u)))
}

export const sortByName = (users) => {
  return users.slice().sort((a, b) => {
    const nameA = getFullName(a)
    const nameB = getFullName(b)

    if (nameA > nameB) {
      return 1
    }
    if (nameA < nameB) {
      return -1
    }
    return 0
  })
}

export const sortByBirthDate = (users) => {
  return users.slice().sort((a, b) => {
    const dateA = +new Date(a.dob.date)
    const dateB = +new Date(b.dob.date)

    return dateA - dateB
  })
}

export const getBirthDates = (users) => {
  return users.map((u) => getBirthDate(u))
}
