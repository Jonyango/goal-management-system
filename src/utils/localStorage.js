//storing the application data on the local storage of the browsers

const LocalStorage = {};

//the getter method

LocalStorage.get = (key) => {
  return localStorage.getItem(key);
};

//the setter method
LocalStorage.set = (key, value) => {
  return localStorage.setItem(key, value);
};

//the remove method
LocalStorage.remove = (key) => {
  return localStorage.removeItem(key);
};

/**
 * functions to manage the goals and goal categories
 */

/**
 * get all goals
 */

LocalStorage.getGoals = () => {
  return LocalStorage.get("goals");
};

/**
 * get all goals of the categories
 */

LocalStorage.getGoalsCategories = (goalcategory) => {
  return LocalStorage.get(goalcategory);
};

/**
 * set a group of goals
 */

LocalStorage.setGoals = (value) => {
  LocalStorage.set("goals", value);
};

/**
 * remove Notes
 **/
LocalStorage.rmGoals = () => {
  LocalStorage.remove("goals");
};
/**
 * remove Notes
 **/
LocalStorage.rmGoalCategory = (goalCategory) => {
  LocalStorage.remove(goalCategory);
};

/**
 * Action methods to handle crud operation of our goals
 */

/**
 *
 * @param {*} id get a goal by its index
 */
LocalStorage.goal = (id) => {
  if (LocalStorage.getGoals() !== null) {
    const List = Json.parse(LocalStorage.getGoals());
    return List[id];
  }
  return [];
};

/**
 * check that goal exists by id
 **/
LocalStorage.rowExists = (object) => {
  const List = JSON.parse(LocalStorage.getGoals());
  if (List !== null && List.length > 0) {
    return List.filter((item) => {
      return object.id === item.id;
    });
  } else {
    return [];
  }
};
/**
 * check that goal exists by id in specific category
 **/
LocalStorage.rowExistsIn = (goalCategory, object) => {
  const List = JSON.parse(localStorage.getItem(goalCategory));
  if (List !== null && List.length > 0) {
    return List.filter((item) => {
      return object.id === item.id;
    });
  } else {
    return [];
  }
};
/**
 * get all goals inside of the goalCategories or else
 **/
LocalStorage.getAllGoals = () => {
  let GoalNextMonth = LocalStorage.getGoalsCategories("Next Month");
  let Today = LocalStorage.getGoalsCategories("Today");
  let Weekly = LocalStorage.getGoalsCategories("Weekly");
  let Goals = LocalStorage.getGoalsCategories("Goals");
  let All;
  GoalNextMonth = GoalNextMonth !== null ? JSON.parse(GoalNextMonth) : [];
  Today = Today !== null ? JSON.parse(Today) : [];
  Weekly = Weekly !== null ? JSON.parse(Weekly) : [];
  Goals = Goals !== null ? JSON.parse(Goals) : [];
  All = [...GoalNextMonth, ...Today, ...Weekly, ...Goals];
  return All;
};
/**
 * get goals by id
 **/
LocalStorage.findId = (id) => {
  const List = LocalStorage.getAllGoals();
  if (List !== null && List.length > 0) {
    return List.filter((item) => {
      return id === item.id;
    });
  } else {
    return [];
  }
};

/**
 * update a goal by id
 **/
LocalStorage.updateId = (id, itemObject) => {
  const List = JSON.parse(
    LocalStorage.getGoalsCategories(
      itemObject.goalCategory === "" ? "Goals" : itemObject.goalCategory
    )
  );
  let goalCategoryIs = itemObject.goalCategory;
  if (List !== null && List.length > 0) {
    const updatedList = List.filter((item) => {
      if (id === item.id) {
        const { title, message, category } = itemObject;
        item.title = title;
        item.message = message;
        item.category = category;
      }
      return item;
    });
    LocalStorage.set(goalCategoryIs === "" ? "Goals" : goalCategoryIs, JSON.stringify(updatedList));
    return true;
  } else {
    return false;
  }
};

export default LocalStorage;
