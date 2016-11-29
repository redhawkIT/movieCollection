const words = 'Channel Burst Stomach Glide Unlike Identity Cunning Drink Rider Property Fibre Matrix Recession Grip Base Swop Pure Bin Density Illusion Chaos Vacuum Baby Deter Dilemma Head Palace Tradition Autonomy Glare Knock Hill Cutting Scrape Cold Revise March See Title Tragedy Soak Margin Pawn Dough Brother Self Symbol Horseshoe Spectrum Miserable Coincide Forest Pity Basic Creation Retiree Feminine Impact License Trace Bow Clothes Banquet Opera Battle Difficult Truth Aloof Slave Heroin Seller Reptile Award Preach Teenager Tiptoe Dawn Gutter Suggest Blue Proclaim Bare Annual Disclose Kick Credit Sugar Soldier Share Runner Tension Fat Knee Museum Objective Support Essential Art Slab Applaud Precedent Camp Thanks Conscious Position Compose Jewel Delay Narrow Surprise Injection Tool Baseball Hate Cope Snarl Scheme Father Pollution Mud Weigh Taste Training Exchange Queue Spirit Offspring Sound Flu Implicit Page Hospital Rear Guest Privilege Intensify Sailor Hell Sun Face Civilian Retired Plug Bee Pattern Refuse Executive Layer Shave Barrel Commerce Sector Inch Vote Business Departure Crutch Rescue Stuff Slice Hardship Watch Return Steel Hunter Dip Inspire Reliance Advice Nursery Bite Pupil Shock Smooth Displace Pocket Devote Mark Thread Sin Action Deep Threshold Liver Sick Reserve Describe Recording Buy Genetic Plane Occupy Chase Orchestra Neighbour Hip Raw Amuse Mislead Easy'.split(' ')

const randomMovies = (num) => {
  function movie(title, rating, year, actors, genre) {
    return {title, rating, genre, actors, year}
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }

  function getActors() {
    const actors = 'Dwayne Johnson, Jackie Chan, Matt Damon, Tom Cruise, Johnny Depp, Jennifer Lawrence, Ben Affleck, Vin Diesel'.split(', ')
    function getActor(a) {
      return a[Math.floor(Math.random() * a.length)]
    }
    const num = Math.floor(Math.random() * actors.length)
    const act = []
    for (let i = 0; i < num; i++) {
      act.push(getActor(actors))
    }
    return act
  }

  const movies = []
  for (let i = 0; i < num; i++) {
    movies.push(movie(getWord(), getRandomInt(0, 10), getRandomInt(1950, 2016), getActors(), getWord()))
  }
  return movies
}

export default randomMovies
