import Validate from '../libraries/Validate';
import AsdSchema from '../models/asd.schema';

// GETTING all DB asds
export async function GET_asds(req, res) {
	try {
		const asds = await AsdSchema.find();
		res.status(200).json({ ok: true, data: asds });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// GETTING a DB asd
export async function GET_asd(req, res) {
	try {
		const { id } = req.params;
		const asd = await AsdSchema.findById(id);
		res.status(200).json({ ok: true, data: asd });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// CREATING a DB asd
export async function POST_asd(req, res) {
	try {
		const body = await Validate(req.body, ['asd']);
		const asd = new AsdSchema(body);
		const _asd = await asd.save();
		res.status(200).json({ ok: true, data: _asd });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// UPDATING a DB asd
export async function PUT_asd(req, res) {
	try {
		const { id } = req.params;
		const body = await Validate(req.body, ['asd']);
		const _asd = await AsdSchema.findOneAndUpdate({ _id: id }, body, {
			new: true,
		});
		res.status(200).json({ ok: true, data: _asd });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// DELETING a DB asd
export async function DEL_asd(req, res) {
	const { id } = req.body;
	AsdSchema.findByIdAndDelete(id, (err, data) => {
		if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
		res.status(200).json({ ok: true, data });
	});
}

