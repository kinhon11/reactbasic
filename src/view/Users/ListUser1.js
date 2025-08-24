import React from "react";
import axios from "axios";
import "./ListUser.scss";

class ListUser extends React.Component {
  state = {
    posts: [],
    title: "",
    body: "",
    editingId: null,
    loading: false, // trạng thái loading
    error: null, // trạng thái lỗi
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.setState({ loading: true, error: null });
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => this.setState({ posts: res.data, loading: false }))
      .catch((err) =>
        this.setState({ error: "Lỗi khi tải dữ liệu", loading: false })
      );
  };

  createPost = () => {
    const { title, body } = this.state;
    if (!title || !body) return;
    this.setState({ loading: true, error: null });
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      })
      .then((res) => {
        this.setState((prev) => ({
          posts: [res.data, ...prev.posts],
          title: "",
          body: "",
          loading: false,
        }));
      })
      .catch(() =>
        this.setState({ error: "Lỗi khi tạo post", loading: false })
      );
  };

  updatePost = () => {
    const { editingId, title, body } = this.state;
    if (!editingId) return;
    this.setState({ loading: true, error: null });
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${editingId}`, {
        title,
        body,
        userId: 1,
      })
      .then((res) => {
        this.setState((prev) => ({
          posts: prev.posts.map((p) => (p.id === editingId ? res.data : p)),
          title: "",
          body: "",
          editingId: null,
          loading: false,
        }));
      })
      .catch(() =>
        this.setState({ error: "Lỗi khi cập nhật", loading: false })
      );
  };

  deletePost = (id) => {
    this.setState({ loading: true, error: null });
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        this.setState((prev) => ({
          posts: prev.posts.filter((p) => p.id !== id),
          loading: false,
        }));
      })
      .catch(() => this.setState({ error: "Lỗi khi xóa", loading: false }));
  };

  editpost = (post) => {
    this.setState({
      editingId: post.id,
      title: post.title,
      body: post.body,
    });
  };

  render() {
    const { posts, title, body, editingId, loading, error } = this.state;
    return (
      <div className="post-manager">
        <h2>Post Manager</h2>

        {/* Hiển thị trạng thái */}
        {loading && <p style={{ color: "black" }}>loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => this.setState({ body: e.target.value })}
          ></textarea>
          {editingId ? (
            <button onClick={this.updatePost}>Update Post</button>
          ) : (
            <button onClick={this.createPost}>Create Post</button>
          )}
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => this.editpost(post)}>Edit</button>
                  <button onClick={() => this.deletePost(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListUser;
