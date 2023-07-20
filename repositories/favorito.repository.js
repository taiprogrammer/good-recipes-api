import { ObjectId } from "mongodb";
import { getClient } from "../config/mongo.database.js";

async function createFavorite(favorite) {
  const client = getClient();

  try {
    return await client
      .db("favorite_db")
      .collection("favorite")
      .insertOne(favorite);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getUserFavorites(id) {
  const client = getClient();

  try {
    return await client
      .db("favorite_db")
      .collection("favorite")
      .find({ usuarioId: id })
      .toArray();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getRecipeFavorites(id) {
  const client = getClient();

  try {
    return await client
      .db("favorite_db")
      .collection("favorite")
      .find({ receitaId: id })
      .toArray();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function deleteFavorite(id) {
  const client = getClient();

  try {
    return await client
      .db("favorite_db")
      .collection("favorite")
      .deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw error;
  }
}

export default {
  createFavorite,
  getUserFavorites,
  getRecipeFavorites,
  deleteFavorite,
};
