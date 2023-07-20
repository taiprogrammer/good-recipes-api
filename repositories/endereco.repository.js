import { ObjectId } from "mongodb";
import { getClient } from "../config/mongo.database.js";

async function createAddress(address) {
  const client = getClient();

  try {
    await client.connect();

    return await client
      .db("address_id")
      .collection("address")
      .insertOne(address);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getAddressesByUserId(id) {
  const client = getClient();

  try {
    return await client
      .db("address_id")
      .collection("address")
      .find({ usuarioId: id })
      .toArray();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getAddress(id) {
  const client = getClient();

  try {
    return await client
      .db("address_id")
      .collection("address")
      .findOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function updateAddress(id, newAddress) {
  const client = getClient();
  try {
    await client.connect();

    await client
      .db("address_id")
      .collection("address")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...newAddress } });

    return await getAddress(id);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function deleteAddress(id) {
  const client = getClient();

  try {
    return await client
      .db("address_id")
      .collection("address")
      .deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export default {
  createAddress,
  getAddressesByUserId,
  getAddress,
  updateAddress,
  deleteAddress,
};
