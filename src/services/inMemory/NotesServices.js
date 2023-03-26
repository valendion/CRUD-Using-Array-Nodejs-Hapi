const { nanoid } = require('nanoid');
const InvariantError = require('../../exeptions/InvariantError');
const NotFoundError = require('../../exeptions/NotFoundError');

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, body, tags }) {
    const id = nanoid(16);

    const createAt = new Date().toISOString();
    const updatedAt = createAt;

    const newNote = {
      title,
      tags,
      body,
      id,
      createAt,
      updatedAt,
    };

    this._notes.push(newNote);

    const isSuccess = this._notes.filter((notes) => notes.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError('Catatan gagal ditambahkan');
    } else {
      return id;
    }
  }

  getNotes() {
    return this._notes;
  }

  getNoteById(id) {
    const note = this._notes.filter((n) => n.id === id)[0];
    if (!note) {
      throw new NotFoundError('Catatan tidak ditemukan');
    } else {
      return note;
    }
  }

  editNoteById(id, { title, body, tags }) {
    const index = this._notes.findIndex((note) => note.id === id);

    if (index === -1) {
      throw new NotFoundError(
        'Gagal memperbaharui catatan. Id tidak ditemukan'
      );
    } else {
      const updateAt = new Date().toISOString();
      this._notes[index] = {
        ...this._notes[index],
        title,
        tags,
        body,
        updateAt,
      };
    }
  }

  deleteNoteById(id) {
    const index = this._notes.findIndex((note) => note.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan');
    } else {
      this._notes.splice(index, 1);
    }
  }
}

module.exports = NotesService;

