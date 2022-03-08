import User from "../models/user.js";

export const IfUserParticipated = async (userId, idEvent) => {
  const user = await User.findOne({ _id: userId }).populate("event");
  if (!user) throw new Error("User dosnt exist");
  if (user.event.length > 0) {
    const res = user.event.map((e) => {
      if (!idEvent.localeCompare(e._id)) {
        return false;
      } else {
        return true;
      }
    });
    return res;
  }
  return true;
};
