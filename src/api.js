export async function getStudentData() {
  const request = await fetch("https://serve-ix6g.onrender.com/students");
  if (!request.ok) {
    throw {
      message: "Server Error",
      status: request.status,
    };
  }
  const data = await request.json();
  return data || null;
}
