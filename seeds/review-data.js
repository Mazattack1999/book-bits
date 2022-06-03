const { Review } = require("../models");

const reviewData = [
  {
    book_title: "Hamlet",
    review_text:
      "The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, who has murdered Hamlet's father, the King, and then taken the throne and married Gertrude, Hamlet's mother. The play vividly charts the course of real and feigned madness—from overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, and moral corruption.",
    star_rating: 3,
    user_id: 4,
    book_id: 1,
  },
  {
    book_title: "Moby Dick",
    review_text:
      "First published in 1851, Melville's masterpiece is, in Elizabeth Hardwick's words, 'the greatest novel in American literature.' The saga of Captain Ahab and his monomaniacal pursuit of the white whale remains a peerless adventure story but one full of mythic grandeur, poetic majesty, and symbolic power. Filtered through the consciousness of the novel's narrator, Ishmael, Moby-Dick draws us into a universe full of fascinating characters and stories, from the noble cannibal Queequeg to the natural history of whales, while reaching existential depths that excite debate and contemplation to this day.",
    star_rating: 5,
    user_id: 3,
    book_id: 2,
  },
  {
    book_title: "Crime and Punishment",
    review_text:
      "It is a murder story, told from a murder;s point of view, that implicates even the most innocent reader in its enormities. It is a cat-and-mouse game between a tormented young killer and a cheerfully implacable detective. It is a preternaturally acute investigation of the forces that impel a man toward sin, suffering, and grace. Ever since its publication in 1866 Crime and Punishment has intrigued readers and sorely tested translators, the best of whom seemed to capture one facet of Dostoevsky's masterpiece while missing the rest.",
    star_rating: 4,
    user_id: 2,
    book_id: 3,
  },
  {
    book_title: "The Great Gatsby",
    review_text:
      "The novel chronicles an era that Fitzgerald himself dubbed the Jazz Age. Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the roaring 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, like Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence.",
    star_rating: 4,
    user_id: 1,
    book_id: 4,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
