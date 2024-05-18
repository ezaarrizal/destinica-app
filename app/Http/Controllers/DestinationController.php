<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $destinations = Destination::select('id', 'nama_destinasi', 'deskripsi', 'lokasi', 'tanggal', 'gambar')->get()->map(function ($destination) {
            $destination->deskripsi = substr($destination->deskripsi, 0, 100) . (strlen($destination->deskripsi) > 100 ? '...' : '');
            return $destination;
        });

        return Inertia::render('destinasi', [
            'destinations' => $destinations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "nama_destinasi" => "required",
            "deskripsi" => "required",
            "lokasi"=> "required",
            "tanggal"=> "required",
            "gambar"=> "required|image|mimes:png,jpg,jpeg|max:2048",
        ]);


        if ($request->hasFile('gambar')) {
            $gambarPath = $request->file('gambar')->store('public/images');
        }

        $destination = new Destination();
        $destination->nama_destinasi = $request->nama_destinasi;
        $destination->deskripsi = $request->deskripsi;
        $destination->lokasi = $request->lokasi;
        $destination->tanggal = $request->tanggal;
        $destination->gambar = Storage::url($gambarPath);
        $destination->save();


        return back()->with("message","Berhasil Upload");
    }

    /**
     * Display the specified resource.
     */
    public function show(Destination $destination)
    {
        return Inertia::render('detDestination', [
            'destination' => $destination
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Destination $destination)
    {
        return Inertia::render("editDestination",[
            "destination"=> $destination
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Destination $destination)
    {
        $data = $request->validate([
            "nama_destinasi" => "nullable|string|max:255",
            "deskripsi" => "nullable|string",
            "lokasi"=> "nullable|string|max:255",
            "tanggal"=> "nullable|date",
            "gambar" => "nullable|image|mimes:png,jpg,jpeg|max:2048",
        ]);

        if ($request->hasFile('gambar')) {
            $gambarPath = $request->file('gambar')->store('public/images');
            $data['gambar'] = Storage::url($gambarPath);
        } elseif ($request->input('gambar_existing')) {
            $data['gambar'] = $request->input('gambar_existing');
        }

        $destination->update($data);

        return redirect()->route('destination.index')->with('message', "Data Berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Destination $destination)
    {
        //
    }
}
